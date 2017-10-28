import { DomainEvent } from './domainEvent';

export const IEventPublisher = Symbol('IEventPublisher');
export interface IEventPublisher {
  publish<T extends DomainEvent>(event: T): void;
}
