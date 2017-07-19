import { IEnumerable, Guid } from '@cashfarm/lang';
import { IEvent } from '../domain/event';
import { Identity } from '../domain/identity';

export interface IEventStore {
  saveEvents(aggregateId: Identity<Guid>, events: IEnumerable<IEvent>, expectedVersion: number): void;
  getEventsForAggregate(aggregateId: Identity<Guid>): IEnumerable<IEvent>;
}
