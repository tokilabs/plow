import { hide } from '@cashfarm/lang';

import { Identity } from './identity';
import { IEntity, Entity } from './entity';
import { DomainEvent } from './domainEvent';

export interface IAggregateRoot<TId extends Identity<any>> extends IEntity<TId> {
  readonly id: TId;
  readonly version: number;
  readonly uncommittedChanges: DomainEvent[];
  markChangesAsCommitted(): void;
  loadFromHistory(history: DomainEvent[]): void;
}

/**
 * Base implementation of an aggregate root.
 *
 * Extend this class and implement apply{event name}() methods for
 * each event of your aggregate.
 *
 * @export
 * @class AggregateRoot
 * @template TId
 */
export class AggregateRoot<TId extends Identity<any>> extends Entity<TId> implements IAggregateRoot<TId> {
    @hide()
    protected _version: number;

    @hide()
    private _changes: DomainEvent[] = [];

    get id(): TId {
        return this._id;
    }

    get version(): number{
        return this._version;
    }

    get uncommittedChanges(): DomainEvent[]{
        return this._changes;
    }

    public markChangesAsCommitted() {
        this._changes.length = 0;
    }

    public loadFromHistory(history: DomainEvent[]) {
        history.forEach( event => this._applyChange(event, false));
    }

    protected applyChange(event: DomainEvent) {
      this._applyChange(event, true);
    }

    private _applyChange(event: DomainEvent, isNew: boolean) {
      // Find out the method to apply the function to
      const applyEvent = this[`apply${event.name}`];

      if (typeof applyEvent !== 'function') {
        throw new Error(`Method apply${event.name} is not defined in ${this.constructor.name}`);
      }

      this[`apply${event.name}`](event);

      if (isNew)
        this._changes.push(event);
    }
}

export default AggregateRoot;
