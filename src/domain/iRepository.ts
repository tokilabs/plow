import { Identity } from './identity';
import { Guid } from '@cashfarm/lang';
import { IEntity } from './entity';

export const IRepositoryOf = Symbol('IRepositoryOf');

export interface IRepository<TAggregate extends IEntity<TId>, TId> {
  getById(id: TId): Promise<TAggregate>;
  save(aggregate: TAggregate): void;
}
