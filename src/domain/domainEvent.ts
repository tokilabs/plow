/**
 * Base class for all domain events.
 *
 * @export
 * @abstract
 * @class DomainEvent
 * @template TSource Type of object publishing events.
 */
export abstract class DomainEvent {
  public version: number;

  // @todo: use a symbol to avoid conflicts OR encapsulate event data inside a payload
  public get name(): string {
    return this._name;
  }

  constructor(private _name: string) {
  }
}
