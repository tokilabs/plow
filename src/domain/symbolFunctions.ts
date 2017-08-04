import { Type } from '@cashfarm/lang';

import { DomainEvent } from './domainEvent';

/**
 * Returns a symbol used to created methods that apply events to agrregates
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
export function Apply(e: DomainEvent & Type): symbol {
  return Symbol.for(e.prototype.constructor.name);
}

/**
 * Returns a symbol used to created methods that handle events
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
export function Handle(e: DomainEvent & Type): symbol {
  return Symbol.for(e.prototype.constructor.name);
}
