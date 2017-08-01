import { IEnumerable, Guid } from '@cashfarm/lang';
import { IDomainEvent } from '../domain/domainEvent';
import { Identity } from '../domain/identity';

export interface IEventStore {
  saveEvents(stream: string, events: IEnumerable<IDomainEvent>, expectedVersion: number): void;
  getEventsForAggregate(aggregateId: Identity<Guid>): IEnumerable<IDomainEvent>;
}
