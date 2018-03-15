import { ConcreteType } from '@cashfarm/lang';

import { IDomainEvent } from '../domain/domainEvent';

export const IEventBus = Symbol.for('cashfarm.plow.IEventBus');

export interface IEventBus {
  subscribe(evt: IDomainEvent & ConcreteType<{}>, handler: Object): void;
  unsubscribe(evt: IDomainEvent & ConcreteType<{}>, handler: Object): void;
  publish(event: IDomainEvent): void;
}
