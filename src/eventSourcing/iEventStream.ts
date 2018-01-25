import { IDomainEvent } from './domainEvent';

export const IEventStream = Symbol('IEventStream');
export interface IEventStream extends Iterable<IDomainEvent> {
  version(): number;
}
