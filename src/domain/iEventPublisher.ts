import { IDomainEvent } from './domainEvent';

export const IEventPublisher = Symbol('IEventPublisher');
export interface IEventPublisher {
  publish<T extends IDomainEvent>(event: T): void;
}
