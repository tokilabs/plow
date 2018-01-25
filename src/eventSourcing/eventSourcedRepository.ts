import { injectable, unmanaged } from 'inversify';

import { Guid, ConcreteType } from '@cashfarm/lang';

import { AggregateRoot, IDomainEvent, Identity, IEventBus, IRepositoryOf } from '../domain';
import { IEventStore } from './iEventStore';
import { AggregateFactory } from './aggregateFactory';

const debug = require('debug')('plow:events:repository');

@injectable()
export abstract class EventSourcedRepositoryOf<TAggregate extends AggregateRoot<TId>, TId extends Identity<Guid> | Guid>
                          implements IRepositoryOf<TAggregate, TId> {

  public constructor(
    @unmanaged() protected storage: IEventStore,
    @unmanaged() protected aggtClass: ConcreteType<TAggregate>,
    @unmanaged() protected eventBus?: IEventBus) {
  }

  public save(aggregate: TAggregate): Promise<IDomainEvent[]> {
    return this.storage.save(aggregate)
      .then(nextVersion => {
        const events = aggregate.uncommittedChanges.slice();

        if (this.eventBus)
            events.map(e => this.eventBus.publish(e));

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
