/**
 * @module cqrs.commandSender
 */
import { ICommand } from './command';

export interface ICommandSender {
  send<T extends ICommand>(command: T): void;
}
