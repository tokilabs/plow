import { Type } from '@cashfarm/lang';
import { Handle, ISubscribeTo, IDomainEvent } from '../domain';
import { Symbols } from '../symbols';
import { IMessageTransport } from './transports/iMessageTransport';

const debug = require('debug')('plow:events');

export class EventBus implements IEventBus {
  constructor(private serviceName: string, private transport: IMessageTransport) {
    // subscribe this instance to ALL events
    // this way the local microservice can choose
    // to listen to any event
    // bus.subscribe('#', (message: any) => this.fanout(event));
  }

  public subscribe(topic: string, handler: (type: string, evt: IDomainEvent) => void) {
    debug(`Registering handler for ${topic}:`, handler.constructor ?
    handler.constructor.name : handler.toString());

    this.transport.subscribe(topic, (message: any) => handler(message.type, message.data));
  }

  public register<T extends IDomainEvent & Type>(evtClass: T, handler: any) {
    const evtName = evtClass.name;
    debug(`Registering handler for ${evtName}:`, handler.constructor ?
        handler.constructor.name : handler.toString());

    this.transport.subscribe(
      `${this.serviceName}.${evtName}`,
      (name: string, event: IDomainEvent) => handler[Handle(evtClass)].apply(handler, [event]));
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
