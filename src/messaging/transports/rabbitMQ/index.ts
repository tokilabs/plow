const servicebus = require('servicebus');

import { Handle, IDomainEvent } from '../../../domain';
import { Symbols } from '../../../symbols';

const debug = require('debug')('plow:events');

import { IMessageTransport } from '../iMessageTransport';

export class RabbitMQTransport implements IMessageTransport {
  private bus: any;

  constructor() {
    const bus = servicebus.bus();

    bus.use(bus.package());
    bus.use(bus.correlate());
    bus.use(bus.logger());

    this.bus = bus;
  }

  public listen(topic: string, handler: (msg: any) => void): void {
    this.bus.listen(topic, handler);
  }

  public send(topic: string, message: any): void {
    this.bus.send(topic, message);
  }

  public subscribe(topic: string, handler: (type: string, msg: any) => void): void {
    this.bus.subscribe(topic, handler);
  }

  public publish(topic: string, message: any): void {
    this.bus.public(topic, message);
  }
}
