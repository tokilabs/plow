import { Guid, ConcreteType } from '@cashfarm/lang';

import { AggregateRoot, Identity, IRepositoryOf } from '../domain';
import { IEventStore } from './iEventStore';

export abstract class EventSourcedRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<Guid>>
                          implements IRepositoryOf<TAggregate, TId> {
  protected readonly storage: IEventStore;

  public constructor(storage: IEventStore, private aggtClass: ConcreteType<TAggregate>) {
    this.storage = storage;
  }

  public save(aggregate: TAggregate, expectedVersion: number): void {
    this.storage.saveEvents(`${aggregate.constructor.name}-${aggregate.id}`, aggregate.uncommittedChanges, expectedVersion);
  }

  public getById(id: TId): TAggregate {
    const evts = this.storage.getEventsForAggregate(id);

    return AggregateRoot.load(this.aggtClass, evts);
  }
}
