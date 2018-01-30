import { Type } from '@cashfarm/lang';

import { IDomainEvent } from './domainEvent';

/**
 * Returns a symbol used to created methods that handle events
 *
 * @export
 * @param {(DomainEvent & Type)} e
 * @returns {symbol}
 */
export function Handle(e: IDomainEvent & Type): symbol {
  return Symbol.for(e.prototype.constructor.name);
}
