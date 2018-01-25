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
    super();

    if (isEmpty(desc)) {
      throw new DomainException('Task description cannot be empty');
    }

    this._description = desc;
    this._done = false;
  }

  public complete() {
    this.applyChange(new TaskCompleted(true));
  }

  public [Apply(TaskCompleted)](evt: TaskCompleted) {
    this._done = evt.done;
  }
}
