import { Guid } from '@cashfarm/lang';
import { IDomainEvent } from '@cashfarm/plow';

@DomainEvent
export class TaskCompleted {
    constructor(
        public readonly taskId: Guid,
        public readonly done: boolean
    ) {}
}
