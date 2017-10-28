import { ConcreteType, Type } from '@cashfarm/lang';

import { DomainEvent } from '../domain';

import { Symbols } from '../symbols';

const SINGLETON = Symbol.for('cashfarm.plow.events.registry');

const debug = require('debug')('plow:events:registry');

export function Event(name?: string) {
  return (target: ConcreteType<DomainEvent>) => {
    target[Symbols.EventName] = name || target.name;
    EventsRegistry.add(name || target.name, target);
  };
}

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
    if (!eventName) {
      const e = new Error('eventName is required for registering events');
      console.error(e.stack);
      throw e;
    }

    if (typeof eventClass[Symbols.EventLoader] !== 'function')
      throw new Error(`Cannot register event ${eventName} class is missing public static function [Symbols.EventLoader](): ${eventName} `);

    if (this.events[eventName] !== undefined)
      throw new Error(`Event ${eventName} was already added to the registry`);

    this.events[eventName] = eventClass;
    debug(`${eventName} added to the registry`);
  }

  public get(eventName: string): ConcreteType<DomainEvent> {
    return this.events[eventName];
  }
}

Object.freeze(EventsRegistry);
