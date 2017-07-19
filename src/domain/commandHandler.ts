/**
 * @module cqrs.commandHandler
 */
import { ICommand } from './command';

/**
 * Handles events of class
 * Type of event.
 * @export
 * @interface ICommandHandler
 * @template T Command type
 */
export interface IHandleCommand<TCommand extends ICommand> {

  /**
   * Handles the command
   * @param {TCommand} command The command object
   * @returns {handle}
   */
  handle(event: TCommand): void;
}

/**
 * Provides a base `handle(ICommand)` method which calls `handle{ICommand.name}()`
 *
 * @export
 * @class CommandHandler
 */
export class CommandHandler {
  handle(cmd: ICommand) {
    // Find out the method to apply the function to
    const commandName = cmd.name;
    this['handle' + commandName](cmd);
  }
}
