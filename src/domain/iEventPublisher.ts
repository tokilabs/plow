import { IEvent } from './event';

export interface IEventPublisher {
  publish<T extends IEvent>(event: T): void;
}
