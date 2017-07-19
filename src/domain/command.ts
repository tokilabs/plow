/**
 * @module cqrs.command
 */
import { Message, IMessage } from '../domain/messaging';

export interface ICommand extends IMessage {
  /* @ts2.0: readonly */ name: string;
}

export class Command extends Message {
  public get name(): string {
    return this._name;
  }

  constructor(name: string) {
    super(name);
  }
}
