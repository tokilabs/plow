const bus = require('servicebus').bus();

import { Type } from '@cashfarm/lang';
import { ICommandSender, ICommand, IHandleCommand } from '../domain';
import { Symbols } from '../symbols';

import { IMessageTransport } from './transports/iMessageTransport';

const debug = require('debug')('plow:commands');

export const ICommandBus = Symbol('@cashfarm/plow.ICommandBus');
export interface ICommandBus {
  register<T extends ICommand>(cmdName: string, handler: IHandleCommand<T>): void;
}

export class CommandBus implements ICommandBus, ICommandSender {

  constructor(private transport: IMessageTransport) {}

  public register<T extends ICommand>(cmdName: string, handler: IHandleCommand<T>) {
    this.transport.listen(cmdName, handler.handle.bind(handler));
  }

  public send(cmd: ICommand) {
    this.transport.send(cmd.name, cmd);
  }
}
