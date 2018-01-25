{% method %}
## Projections

A projection class implements methods that handle events with the intent of projecting the data to
a read model. The read model is a denormalized databsed optimized for reading.

Here's an example of a projection that sums up the number of completed tasks

{% sample lang="ts" %}

```ts
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

{% sample lang="js" %}
```js
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
{% endmethod %}
