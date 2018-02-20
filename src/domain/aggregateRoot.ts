import { plainToClass, Exclude } from 'class-transformer';

import { ConcreteType, requireByFQN, Guid } from '@cashfarm/lang';

import { IEntity, Entity } from './entity';
import { IDomainEvent } from './domainEvent';
import { Identity } from './identity';

const debug = require('debug')('plow:aggregate');

export interface IAggregateRoot<TId extends Identity<any> | Guid> extends IEntity<TId> {
  readonly id: TId;
}

/**
 * Base implementation of an aggregate root.
 *
 * @export
 * @class AggregateRoot
 * @template TId
 */
export abstract class AggregateRoot<TId extends Identity<any> | Guid> extends Entity<TId> implements IAggregateRoot<TId> {

  @Exclude()
  protected _events: IDomainEvent[] = [];
}
