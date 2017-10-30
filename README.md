# Plow

Get the soil read to grow awesomeness :)

## Documentation (Can't call it a proper doc, but here it goes)

### The building blocks

### Domain Events

Events represent change. Specifically a change that has already happened. They are immutable. Events are used inside Entities
to apply the change to it's internal state and are propagated throughout the system to notify interested parties that something happened.

Here's is a simple event implementation that represents the fact that a task was completed:

```
import { Guid } from '@cashfarm/lang';
import { IDomainEvent } from '@cashfarm/plow';

@DomainEvent
class TaskCompleted {
    constructor(
        public readonly taskId: Guid,
        public readonly done: boolean
    ) {}
}
```

#### `Entity` and `AggregateRoot<TId>` classes

You model your domain using Entities and Aggregate Roots (AR). Only AR classes should be used to modify the system state.
Aggregate Roots should protect their internal state, expose semantic methods and modify their internal state by applying
events. Here's a simple example of what an AR should look like:

```
import { Guid, isEmpty } from '@cashfarm/lang';
import { AggregateRoot, Apply, IDomainEvent, Event } from '@cashfarm/plow';

import { TaskCompleted } from '../events';

class Task extends AggregateRoot<Guid> {
    private _description: string;
    public get description(): string {
        return this._description;
    }

    private _done: boolean;
    public get done(): boolean {
        return this._done;
    }

    constructor(desc: string) {
        if (isEmpty(desc)) {
            throw new DomainException('Task description cannot be empty');
        }

        this._desc = desc;
        this._done = false;
    }

    public complete() {
        this.applyChange(new TaskCompleted(true));
    }

    public [Apply(TaskCompleted)](evt: TaskCompleted) {
        this._done = evt.done;
    }
}
```

### Repositories

Repositories are how we call the classes that permanently store aggregate roots.
If you are using [GetEventStore](http://geteventstore.com) to store your aggregates, all you
need to do is extend the class `EventSourcedRepositoryOf<TAggregate, TAggtId>`;

If you are using Plow's container, you can simply inject `IEventStore` and `IEventPublisher` as
they are already configured in the inversify container.

```
export class TaskRepository extends EventSourcedRepositoryOf<Task, Guid> {
  constructor(
    @inject(IEventStore) protected storage: IEventStore,
    @inject(IEventPublisher) eventPublisher: IEventPublisher
  ) {
    super(storage, Campaign, eventPublisher);
  }
}
```

### Projections

A projection class implements methods that handle events with the intent of projecting the data to
a read model. The read model is a denormalized databsed optimized for reading.

Here's an example of a projection that sums up the number of completed tasks

```
import { Handle } from '@cashfarm/plow';

import { TaskCompleted } from '../events';

@Projection(TaskCompleted) // This decorator will register the projection in the event bus
export class TaskProjections {
  constructor(
      @inject(TaskStore) private tasks: TaskStore,
      @inject(UserStore) private users: UserStore) {}

  public [Handle(TaskCompleted)](event: TaskCompleted): void {
    debug('Running projection for TaskCompleted');
    const task = this.tasks.findById(event.taskId);
    const user = this.users.findById(task.userId);

    user.completedTasks += 1;

    this.users.update(user);
  }
}
```

## Changelog

### 0.4

- Plow now has an internal inversify container for dependency injection
- Use `@Projection`, `@Controller` and `@Event` to register the respective classes
-
- No need for `[Symbol.EventLoader]()` and `[Symbol.MAPPER]()` methods

## Roadmap

### Sometime

- create a generator (yeoman or vscode) to generate boilerplates for:
    - Stores and Repositories
    - events
    - AggregateRoots
    - Endpoints
    - Projections

#### Event deserialization

Goal: To get rid of the static [EventLoader]() method

Proposal 1:
    - if Event.fromJson()
    - else:
        - Instantiate without calling the constructor
        [ if we can list properties and it's types]
        - Iterate properties as P
            - if P is an array recurse
            - if typeof P not in [number,string,boolean]
                - if typeof P is Date: do auto conversion from string to Date
                - if typeof P is ClassX
                    - if ClassX.fromJson() exists, call it
                    - else: throw error requiring dev to implement Event.fromJSON()

Proposal 2:
    Always instantiate events passing a single parameter (data)

Proposal 3:
    On service start
    instantiate each event once passing a sequence of numbers as args eg: new SomeEvent(1,2,3,4,5,6,7,8,9,10...)
    Then inspect the values of generated instance properties to determine which properties are passed to the constructor
        and in which positions creating a constructor arguments map
    Save that info as metadata and use it to instantiate new events
