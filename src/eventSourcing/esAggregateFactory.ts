import { ConcreteType } from '@cashfarm/lang';

import { ESAggregateRoot } from './esAggregateRoot';
import { EventEnvelope } from '../eventSourcing';

/**
 * @private
 */
// tslint:disable-next-line:no-stateless-class
export class ESAggregateFactory {
  public static create<T extends ESAggregateRoot<any>>(aggtType: ConcreteType<T>, events: EventEnvelope[]): T {
    if (!events || events.length === 0)
      throw new Error(
        `The events parameter must be an array with at least 1 event.\n${aggtType.name}.create() received ${events}`);

    return ESAggregateRoot.load(aggtType, events);
  }
}
