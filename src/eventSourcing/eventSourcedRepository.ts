import { injectable, unmanaged } from 'inversify';

import { Guid, ConcreteType } from '@cashfarm/lang';

import { IDomainEvent, Identity, IRepositoryOf } from '../domain';
import { ESAggregateFactory } from './aggregateFactory';
import { IEventStore } from './iEventStore';
import { IEventBus } from './iEventBus';
import { ESAggregateRoot } from 'eventSourcing/esAggregateRoot';

const debug = require('debug')('plow:events:repository');

@injectable()
export abstract class EventSourcedRepositoryOf<TAggregate extends ESAggregateRoot<TId>, TId extends Identity<Guid> | Guid>
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

    return ESAggregateFactory.create<TAggregate>(this.aggtClass, evts);
  }
}
