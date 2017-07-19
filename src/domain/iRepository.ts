import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';

export interface IRepository {}

export interface IRepositoryOf<TEntity extends AggregateRoot<TId>, TId extends Identity<TId>> extends IRepository {
  save(aggregate: AggregateRoot<TId>, expectedVersion: number): void;
  getById(id: TId): TEntity;
}
