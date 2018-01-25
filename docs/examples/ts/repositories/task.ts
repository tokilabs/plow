import { inject } from 'inversify';

import { Guid } from '@cashfarm/lang';
import { EventSourcedRepositoryOf, IEventStore, IEventBus } from '@cashfarm/plow';

import { Task } from '../domain/entities/task';

export class TaskRepository extends EventSourcedRepositoryOf<Task, Guid> {
  constructor(
    @inject(IEventStore) protected storage: IEventStore,
    @inject(IEventBus) eventBus: IEventBus
  ) {
    super(storage, Task, eventBus);
  }
}
