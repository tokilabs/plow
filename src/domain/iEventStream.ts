import { DomainEvent } from './domainEvent';

export interface IEventStream extends Iterable<DomainEvent> {
  version(): number;
}
