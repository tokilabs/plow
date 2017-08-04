import { ConcreteType } from '@cashfarm/lang';

import { DomainEvent } from '../domain';

import { Symbols } from '../symbols';

const SINGLETON = Symbol.for('cashfarm.plow.events.registry');

export class EventsRegistry {

  private readonly events: { [key: string]: ConcreteType<DomainEvent> };

  public static get instance(): EventsRegistry {
    return global[SINGLETON] || (global[SINGLETON] = new EventsRegistry());
  }

  private constructor() {
    this.events = {};
    Object.freeze(this);
  }

  public static add(eventName: string, eventClass: ConcreteType<DomainEvent>): void {
    return EventsRegistry.instance.add(eventName, eventClass);
  }

  public static get(eventName: string): ConcreteType<DomainEvent> {
    return EventsRegistry.instance.get(eventName);
  }

  public add(eventName: string, eventClass: ConcreteType<DomainEvent>): void {
    if (typeof eventClass[Symbols.EventLoader] !== 'function')
      throw new Error(`Cannot register event ${eventName} class is missing public static function [Symbols.EventLoader](): ${eventName} `);

    this.events[eventName] = eventClass;
  }

  public get(eventName: string): ConcreteType<DomainEvent> {
    return this.events[eventName];
  }
}

Object.freeze(EventsRegistry);
