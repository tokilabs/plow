import { ConcreteType } from '@cashfarm/lang';

import { AggregateRoot } from '../domain';
import { EventEnvelope } from '../eventSourcing';

// tslint:disable-next-line:no-stateless-class
export class AggregateFactory {
  public static create<T extends AggregateRoot<any>>(aggtType: ConcreteType<T>, events: EventEnvelope[]): T {
    if (!events || events.length === 0)
      throw new Error(
        `The events parameter must be an array with at least 1 event.\n
${aggtType.name}.create() received ${events}`);

    return AggregateRoot.load(aggtType, events);
  }
}
