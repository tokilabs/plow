import { DomainEvent } from './domainEvent';

export interface IEventPublisher {
  publish<T extends DomainEvent>(event: T): void;
}
