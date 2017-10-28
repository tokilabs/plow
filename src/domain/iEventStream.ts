import { DomainEvent } from './domainEvent';

export const IEventStream = Symbol('IEventStream');
export interface IEventStream extends Iterable<DomainEvent> {
  version(): number;
}
