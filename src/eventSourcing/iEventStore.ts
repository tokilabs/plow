import { Guid, Type } from '@cashfarm/lang';

import { AggregateRoot, IDomainEvent } from '../domain';
import { Identity } from '../domain/identity';
import { EventEnvelope } from './eventEnvelope';

export const IEventStore = Symbol('IEventStore');
export interface IEventStore {
  /**
   * Returns the next expected version
   *
   * @param {AggregateRoot<any>} aggregate
   * @returns {Promise<number>}
   * @memberof IEventStore
   */
  save(aggregate: AggregateRoot<any>): Promise<number>;
  getEventsByAggregate(aggregateType: Type, aggregateId: Identity<Guid> | Guid): Promise<EventEnvelope[]>;
}
