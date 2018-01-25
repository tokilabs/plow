import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';
import { Guid } from '@cashfarm/lang';

export const IRepositoryOf = Symbol('IRepositoryOf');

export interface IRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<any> | Guid> {
  getById(id: TId): Promise<TAggregate>;
  save(aggregate: TAggregate): void;
}
