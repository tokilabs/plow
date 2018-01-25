{% method %}
## `Entity` and `AggregateRoot<TId>` classes

You model your domain using Entities and Aggregate Roots (AR). Only AR classes should be used to modify the system state.
Aggregate Roots should protect their internal state, expose semantic methods and modify their internal state by applying
events. Here's a simple example of what an AR should look like:

{% sample lang="ts" %}
```ts
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

{% sample lang="js" %}

```js
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

{% endmethod %}
