import { Guid, ConcreteType } from '@cashfarm/lang';

import { Identity, GuidIdentity } from './identity';

import { Symbols } from '../symbols';
import { EventsRegistry } from '../eventSourcing';

/**
 * @deprecated Use the IDomainEvent class instead
 */
export const IDomainEvent = Symbol('IDomainEvent');
// tslint:disable-next-line:no-empty-interface
export interface IDomainEvent {}

/**
 * Decorates the class as a Domain Event setting a name different than the class name
 * @param name The name of the event
 */
export function DomainEvent(name?: string): (target: ConcreteType<IDomainEvent>) => void;
/**
 * Do not use this. Either use `@DomainEvent` or `@DomainEvent("customName")`
 * @private
 */
export function DomainEvent(target: ConcreteType<IDomainEvent>): void;
export function DomainEvent(nameOrTarget?: string | ConcreteType<IDomainEvent>) {
  if (typeof nameOrTarget !== 'string') {
    nameOrTarget[Symbols.EventName] = nameOrTarget.name;
    EventsRegistry.add(nameOrTarget.name, nameOrTarget);
  }
  else {
    return (target: ConcreteType<IDomainEvent>) => {
      target[Symbols.EventName] = name || target.name;
      EventsRegistry.add(name || target.name, target);
    };
  }
}
