import { IDomainEvent } from './domainEvent';

/**
 * Implemented by anything that wishes to subscribe to an event emitted by
 * an aggregate and successfully stored.
 * @export
 * @interface IEventHandler
 * @template T
 */
export interface ISubscribeTo<TEvent extends IDomainEvent> {

  /**
   * Handles the event
   *
   * @param {TEvent} event The event object
   * @returns {handle}
   */
  handle(event: TEvent): void;
}
