import { Type, Exception } from '@cashfarm/lang';

import { Handle, IDomainEvent } from '../domain';
import { Symbols } from '../symbols';
import { IEventBus } from 'eventSourcing/iEventBus';
import { IMessageTransport } from './transports/iMessageTransport';
import { IHandlerFunction } from './iHandlerFunction';

const debug = require('debug')('plow:events');

export class EventBus implements IEventBus {
  constructor(private serviceName: string, private transport: IMessageTransport) {
    // subscribe this instance to ALL events
    // this way the local microservice can choose
    // to listen to any event
    // bus.subscribe('#', (message: any) => this.fanout(event));
  }

  public subscribeToTopic(topic: string, handler: IHandlerFunction) {
    debug(`Registering handler for ${topic}:`, handler.constructor ?
    handler.constructor.name : handler.toString());

    this.transport.subscribe(topic, (message: any) => handler(message.type, message.data));
  }

  public subscribe<T extends IDomainEvent & Type>(evtClass: T, handler: IHandlerFunction) {
    const evtName = evtClass.name;
    debug(`Registering handler for ${evtName}:`, handler.constructor ?
        handler.constructor.name : handler.toString());

    if (typeof handler[Handle(evtClass)] !== 'function') {
      throw new Exception(`Can't subscribe ${handler.constructor.name} to ${evtClass.name} ` +
            `because it has not defined a method \`public [Handle(${evtClass.name})](evt: ${evtClass.name})`);
    }

    this.transport.subscribe(
      `${this.serviceName}.${evtName}`,
      (name: string, event: IDomainEvent) => handler[Handle(evtClass)].apply(handler, [event]));
  }

  public unsubscribe<T extends IDomainEvent & Type>(evtClass: T, handler: any) {
    throw new Exception('not implemented');
  }

  public publish(evt: IDomainEvent) {
    const evtName = this.getEventName(evt);
    debug(`Publishing event ${evtName}`);

    this.transport.publish(`${this.serviceName}.${evtName}`, evt);
  }

  private getEventName(evt: IDomainEvent) {
    return evt[Symbols.EventName] || evt.constructor[Symbols.EventName] || evt.constructor.name;
  }
}
