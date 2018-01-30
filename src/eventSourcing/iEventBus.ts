import { Type } from '@cashfarm/lang';

import { IDomainEvent } from '../domain/domainEvent';

export const IEventBus = Symbol.for('cashfarm.plow.IEventBus');

export interface IEventBus {
  subscribe<T extends IDomainEvent & Type>(evt: T, handler: Type): void;
  unsubscribe<T extends IDomainEvent & Type>(evt: T, handler: Type): void;
  publish<T extends IDomainEvent>(event: T): void;
}
