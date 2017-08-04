import { Identity } from './identity';
import { AggregateRoot } from './aggregateRoot';
import { DomainEvent } from './domainEvent';

export interface IRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<any>> {
  save(aggregate: TAggregate): Promise<DomainEvent[]>;
  getById(id: TId): Promise<TAggregate>;
}
