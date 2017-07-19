import { IMessage } from './messaging';
import { DomainEvent } from './domainEvent';
import { Guid } from '@cashfarm/lang';

export interface IEvent extends IMessage {
  /**
   * Id of the event. Can be used for idempotence
   *
   * @type {Guid}
   * @memberof IEvent
   */
  readonly eventId: Guid;
  readonly name: string;
}
