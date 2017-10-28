const bus = require('servicebus').bus();

import { Type } from '@cashfarm/lang';
import { ICommandSender, ICommand, IHandleCommand } from '../domain';
import { Symbols } from '../symbols';

const debug = require('debug')('plow:commands');

bus.use(bus.package());
bus.use(bus.correlate());
bus.use(bus.logger());

export const ICommandBus = Symbol('ICommandBus');
export interface ICommandBus {
  register<T extends ICommand>(cmdName: string, handler: IHandleCommand<T>): void;
}

export class CommandBus implements ICommandBus, ICommandSender {
  public register<T extends ICommand>(cmdName: string, handler: IHandleCommand<T>) {
    bus.listen(cmdName, handler.handle.bind(handler));
  }

  public send(cmd: ICommand) {
    bus.send(cmd.name, cmd);
  }
}

export default new CommandBus();
