import { Guid } from '@cashfarm/lang';

export interface ICommand {
  readonly id: Guid;
  readonly name: string;
}

export class Command {
  public readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
