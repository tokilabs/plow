export interface IMessage {
}

export class Message implements IMessage {
  protected _name: string;

  constructor(name: string) {
    this._name = name;
  }
}

export interface IHandle<T extends IMessage> {
  handle(message: T): void;
}
