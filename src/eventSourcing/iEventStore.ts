import { IEnumerable, Guid, Type } from '@cashfarm/lang';

import { AggregateRoot, DomainEvent } from '../domain';
import { Identity } from '../domain/identity';
import { EventEnvelope } from './eventEnvelope';

export interface IEventStore {
  /**
   * Returns the next expected version
   *
   * @param {AggregateRoot<any>} aggregate
   * @returns {Promise<number>}
   * @memberof IEventStore
   */
  save(aggregate: AggregateRoot<any>): Promise<number>;
  getEventsByAggregate(aggregateType: Type, aggregateId: Identity<Guid>): Promise<IEnumerable<EventEnvelope>>;
}
