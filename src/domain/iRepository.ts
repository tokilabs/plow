import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';
import { DomainEvent } from './domainEvent';
import { Guid } from '@cashfarm/lang';

export const IRepositoryOf = Symbol('IRepositoryOf');
export interface IRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<any> | Guid> {
  save(aggregate: TAggregate): Promise<DomainEvent[]>;
  getById(id: TId): Promise<TAggregate>;
}
