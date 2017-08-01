import { Type } from '@cashfarm/lang';

import { IDomainEvent } from './domainEvent';

/**
 * Returns a symbol used to created methods that apply events to agrregates
 *
 * @export
 * @param {(IDomainEvent & Type)} e
 * @returns {symbol}
 */
export function Apply(e: IDomainEvent & Type): symbol {
  return Symbol.for(e.prototype.constructor.name);
}

/**
 * Returns a symbol used to created methods that handle events
 *
 * @export
 * @param {(IDomainEvent & Type)} e
 * @returns {symbol}
 */
export function Handle(e: IDomainEvent & Type): symbol {
  return Symbol.for(e.prototype.constructor.name);
}
