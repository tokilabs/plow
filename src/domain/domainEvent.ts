import { Guid } from '@cashfarm/lang';

import { Identity, GuidIdentity } from './identity';

export interface IDomainEvent {
  /**
   * Id of the event. Can be used for idempotence
   *
   * @type {Guid}
   * @memberof IEvent
   */
  readonly id: Guid;
  readonly name: string;
  readonly sourceId:  number | string | Guid | Identity<Guid>;
  readonly sourceVersion: number;
  readonly metadata: { [key: string]: any };
}

/**
 * Base class for all domain events.
 *
 * @export
 * @abstract
 * @class DomainEvent
 * @template TSource Type of object publishing events.
 */
export abstract class DomainEvent implements IDomainEvent {

  public readonly id: Guid;
  public readonly name: string;

  public readonly sourceId: number | string | Guid | Identity<Guid>;
  public readonly sourceVersion: number;

  public readonly metadata: { [key: string]: any };

  constructor(name: string, sourceId: GuidIdentity, sourceVersion: number, metadata?: { [key: string]: any }) {
    this.name = name;
    this.sourceId = sourceId;
    this.sourceVersion = sourceVersion;
    this.metadata = metadata;
  }
}
