import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';
import { IDomainEvent } from './domainEvent';
import { Guid } from '@cashfarm/lang';

export const IRepositoryOf = Symbol('IRepositoryOf');
export interface IRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<any> | Guid> {
  save(aggregate: TAggregate): Promise<IDomainEvent[]>;
  getById(id: TId): Promise<TAggregate>;
}
