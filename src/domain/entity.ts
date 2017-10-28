import { serializeAs, ExtendedObject, Guid } from '@cashfarm/lang';

import { Identity } from './identity';

export const IEntity = Symbol('IEntity');
export interface IEntity<TId> {
  readonly id: TId;
}

/**
 * Abstract Base Class for Entities
 *
 * @export
 * @abstract
 * @class Entity
 * @extends {IEntity<TId>}
 * @template TId The type of this entities identity.
 */
export abstract class Entity<TId extends Identity<any> | Guid> extends ExtendedObject implements IEntity<TId> {

  @serializeAs('id')
  protected _id: TId;

  /**
   * Persistent identity value for the Entity
   * @readonly
   * @type {TId}
   */
  public get id(): TId {
      return this._id;
  }

  constructor(id?: TId) {
    super();
    this._id = id;
  }
}
