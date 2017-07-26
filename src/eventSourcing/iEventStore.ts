import { IEnumerable, Guid } from '@cashfarm/lang';
import { DomainEvent } from '../domain/domainEvent';
import { Identity } from '../domain/identity';

export interface IEventStore {
  saveEvents(aggregateId: Identity<Guid>, events: IEnumerable<DomainEvent>, expectedVersion: number): void;
  getEventsForAggregate(aggregateId: Identity<Guid>): IEnumerable<DomainEvent>;
}
