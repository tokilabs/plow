import { Guid } from '@cashfarm/lang';

import { Identity, GuidIdentity } from './identity';

import { Symbols } from '../symbols';

// tslint:disable-next-line:no-empty-interface
export interface IDomainEvent {
}

/**
 * Base class for all domain events.
 *
 * @export
 * @abstract
 * @class DomainEvent
 * @template TSource Type of object publishing events.
 */
// tslint:disable-next-line:no-stateless-class
export abstract class DomainEvent implements IDomainEvent {
  constructor(name?: string) {
    this[Symbols.EventName] = name || this.constructor.name;
  }
}
