import { Guid, ConcreteType } from '@cashfarm/lang';

import { AggregateRoot, DomainEvent, Identity, IEventPublisher, IRepositoryOf } from '../domain';
import { IEventStore } from './iEventStore';
import { AggregateFactory } from './aggregateFactory';

const debug = require('debug')('plow:events:repository');

export abstract class EventSourcedRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<Guid> | Guid>
                          implements IRepositoryOf<TAggregate, TId> {

  public constructor(
    protected storage: IEventStore,
    protected aggtClass: ConcreteType<TAggregate>,
    protected eventPublisher?: IEventPublisher) {
  }

  public save(aggregate: TAggregate): Promise<DomainEvent[]> {
    return this.storage.save(aggregate)
      .then(nextVersion => {
        const events = aggregate.uncommittedChanges.slice();

        if (this.eventPublisher)
            events.map(e => this.eventPublisher.publish(e));

        aggregate.markChangesAsCommitted();

        return events;
      });
  }

  public async getById(id: TId): Promise<TAggregate> {
    debug(`Getting aggregate of ${this.aggtClass.name} with id ${id}`);

    const evts = await this.storage.getEventsByAggregate(this.aggtClass, id);

    if (evts.length === 0)
      return null;

    return AggregateFactory.create<TAggregate>(this.aggtClass, evts);
  }
}
