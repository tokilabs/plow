import { IDomainEvent, IAggregateRoot } from './domain';

/**
 * Plow framework configuration options
 *
 * @export
 * @interface IPlowConfig
 */
export interface IPlowConfig {
  /**
   * The name of your application package
   *
   * This is used as default when FQNs don't specify a package
   */
  appPackageName?: string;

  /**
   * Options for messaging (Events and Commands)
   */
  messaging: {
    /**
     * Which transport to use for sending commands and publishing events
     *
     * @type {('rabbitmq' | 'inmemory')}
     */
    transport: 'rabbitmq' | 'inmemory'
  };

  /**
   * Whether or not Plow should require an explicit Apply method for each event the Aggregate Root is to handle
   */
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

export const PlowConfig = singleton.instance;
