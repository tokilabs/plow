import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';

export interface IRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<any>> {
  save(aggregate: TAggregate, expectedVersion: number): void;
  getById(id: TId): TAggregate;
}
