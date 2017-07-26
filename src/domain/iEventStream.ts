import { IDomainEvent } from './domainEvent';

export interface IEventStream extends Iterable<IDomainEvent> {
  version(): number;
}
