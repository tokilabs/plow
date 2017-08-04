import { Guid } from '@cashfarm/lang';

import { Identity } from '../domain';

export interface IEventEnvelope {
  readonly id: Guid;
  readonly created: Date;
  readonly aggregateType: string;
  readonly aggregateId: Identity<any>;
  readonly version: number;
  readonly eventType: string;
  readonly eventData: Object;
  readonly metadata: Object;
}
export class EventEnvelope {
  public readonly id: Guid;

  constructor(props?: IEventEnvelope);
  constructor(
    id: Guid,
    created: Date,
    aggregateType: string,
    aggregateId: Identity<any>,
    version: number,
    eventType: string,
    eventData: Object,
    metadata: Object)
  constructor(
    idOrObj: Guid | IEventEnvelope,
    public readonly created?: Date,
    public readonly aggregateType?: string,
    public readonly aggregateId?: Identity<any>,
    public readonly version?: number,
    public readonly eventType?: string,
    public readonly eventData?: Object,
    public readonly metadata?: Object) {
      if (idOrObj instanceof Guid) {
        this.id = idOrObj;
      }
      else {
        Object.getOwnPropertyNames(idOrObj).forEach(p => this[p] = idOrObj[p]);
      }
  }
}
