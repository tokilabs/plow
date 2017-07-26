import { IDomainEvent } from './domainEvent';

export interface IEventPublisher {
  publish<T extends IDomainEvent>(event: T): void;
}
