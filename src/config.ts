// tslint:disable-next-line:no-import-side-effect
import 'reflect-metadata';

import { IDomainEvent, IAggregateRoot } from './domain';

/**
 * Plow framework configuration options
 *
 * @export
 * @interface IPlowConfig
 */
export interface IPlowConfig {
  requireApplyForEachEvent: boolean;

  defaultApplyFn(aggt: IAggregateRoot<any>, event: IDomainEvent): void;
}

export function CopyPropsToUnderscoreProp(aggt: IAggregateRoot<any>, event: IDomainEvent): void {
  Reflect.ownKeys(event).forEach(k => {
    if ('_id' === `_${k}`) return;
    aggt[`_${k}`] = event[k];
  });
}

export function CopyProps(aggt: IAggregateRoot<any>, event: IDomainEvent): void {
  Reflect.ownKeys(event).forEach(k => {
    if ('id' === k) return;
    aggt[k] = event[k];
  });
}

const _config = {
  requireApplyForEachEvent: false,
  defaultApplyFn: CopyPropsToUnderscoreProp
};

const PLOW_CONFIG = Symbol.for('cashfarm.plow.config');

// check if the global object has this symbol
// add it if it does not have the symbol, yet
// ------------------------------------------

const globalSymbols = Object.getOwnPropertySymbols(global);

if (!(globalSymbols.indexOf(PLOW_CONFIG) > -1)) {
  global[PLOW_CONFIG] = _config;
}

// define the singleton API
// ------------------------

const singleton: {
  instance: IPlowConfig
} = <any> {};

Object.defineProperty(singleton, 'instance', {
  get: () => {
    return global[PLOW_CONFIG];
  }
});

// ensure the API is never changed
// -------------------------------

Object.freeze(singleton);

// export the singleton API only
// -----------------------------

export const config = singleton.instance;
export default config;
