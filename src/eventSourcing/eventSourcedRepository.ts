import { Guid, ConcreteType } from '@cashfarm/lang';

import { AggregateRoot, DomainEvent, Identity, IEventPublisher, IRepositoryOf } from '../domain';
import { IEventStore } from './iEventStore';
import { AggregateFactory } from './aggregateFactory';

export abstract class EventSourcedRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<Guid>>
                          implements IRepositoryOf<TAggregate, TId> {

  public constructor(
    protected storage: IEventStore,
    protected aggtClass: ConcreteType<TAggregate>,
    protected eventPublisher?: IEventPublisher) {
  }

  public save(aggregate: TAggregate): Promise<DomainEvent[]> {
    return this.storage.save(aggregate)
      .then(nextVersion => {
        const events = aggregate.uncommittedChanges;
        aggregate.markChangesAsCommitted();

        if (this.eventPublisher)
            events.map(e => this.eventPublisher.publish(e));

        return events;
      });
  }

  public async getById(id: TId): Promise<TAggregate> {
    const evts = await this.storage.getEventsByAggregate(this.aggtClass, id);

    return AggregateFactory.create<TAggregate>(this.aggtClass, evts);
  }
}
