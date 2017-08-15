import { Guid } from '@cashfarm/lang';

import { Identity, GuidIdentity } from './identity';

import { Symbols } from '../symbols';
import { EventsRegistry } from '../eventSourcing';

/**
 * @deprecated Use the DomainEvent class instead
 */// tslint:disable-next-line:no-empty-interface
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
export abstract class DomainEvent {
  constructor(name?: string) {
    this.constructor[Symbols.EventName] = name || this.constructor.name;
    EventsRegistry.instance.add(this[Symbols.EventName], <any>this.constructor);
  }
}
