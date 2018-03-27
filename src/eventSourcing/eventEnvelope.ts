import { Guid } from '@cashfarm/lang';

import { Identity, IDomainEvent, IAggregateRoot } from '../domain';
import { IESAggregateRoot } from './esAggregateRoot';

export interface IEventEnvelope {
  readonly id: Guid;
  readonly aggregateType: string;
  readonly aggregateId: Identity<any>;
  readonly aggregateVersion: number;
  /**
   * Fully Qualified Event Name
   *
   * format: "[package].[class]"
   *
   * @type {string}
   * @memberof IEventEnvelope
   */
  readonly eventType: string;
  readonly event: Object;
  readonly metadata?: Object;
  readonly createdAt: Date;
}

/**
 * This class wraps an event to allow it to be searchable by the aggregate id, type or event type.
 *
 * This is very useful when the event is stored on a database or event store
 */
export class EventEnvelope implements IEventEnvelope {
  public readonly createdAt: Date;

  constructor(
    public readonly id: Guid,
    public readonly aggregateType: string,
    public readonly aggregateId: Identity<any>,
    public readonly aggregateVersion: number,
    public readonly eventType: string,
    public readonly event: IDomainEvent,
    public readonly metadata?: Object,
    createdAt?: Date) {
      this.createdAt = createdAt || new Date();
  }

  public static wrap(aggt: IESAggregateRoot<any>, event: IDomainEvent, metadata?: Object): EventEnvelope {
    return new EventEnvelope(
      new Guid(),
      String(Reflect.getMetadata(Symbol.for('FQN'), aggt)),
      aggt.id,
      aggt.version,
      String(Reflect.getMetadata(Symbol.for('FQN'), event)),
      event,
      metadata,
      new Date()
    );
  }
}
