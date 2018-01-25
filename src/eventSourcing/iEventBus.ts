import { Type } from '@cashfarm/lang';

import { IDomainEvent } from './domainEvent';

export const IEventBus = Symbol.for('cashfarm.plow.IEventBus');

export interface IEventBus {
  subscribe<T extends IDomainEvent & Type>(evt: T, handler: any): void;
  unsubscribe<T extends IDomainEvent & Type>(evt: T, handler: any): void;
  publish<T extends IDomainEvent>(event: T): void;
}
