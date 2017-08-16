import * as Bluebird from 'bluebird';
import * as uuid from 'uuid';
import * as EventStore from 'node-eventstore-client';

const  debug = require('debug')('plow:events:ges');

import { Guid, IEnumerable, Type } from '@cashfarm/lang';

import { AggregateRoot, Identity, DomainEvent } from '../../domain';
import { AggregateFactory } from '../aggregateFactory';
import { EventEnvelope } from '../eventEnvelope';
import { IEventStore } from '../iEventStore';
import { Symbols } from '../../symbols';

export class GesEventStore implements IEventStore {
  constructor(
    private host: string = 'localhost',
    private port: number = 1113,
    private settings: EventStore.ConnectionSettings = {}) {
  }

  public save<T extends AggregateRoot<Identity<Guid>>>(aggregate: T): Promise<number> {
    return this.saveEvents(aggregate.constructor, aggregate.id.value, aggregate.uncommittedChanges, aggregate.version)
      .then(results => results.reduce<number>((r, c) => c.nextExpectedVersion, 0));
  }

  public async getEventsByAggregate(aggregateType: Type, aggregateId: Identity<Guid>): Promise<IEnumerable<EventEnvelope>> {
    const events: EventEnvelope[] = [];
    let currentSlice: EventStore.StreamEventsSlice;
    let nextSliceStart = 0;
    const streamName = this.getStreamName(aggregateType, aggregateId.value);

    const conn = await this.connect();

    debug(`Reading events stream ${streamName}`);

    do {
      currentSlice = await conn.readStreamEventsForward(streamName, nextSliceStart, 200);
      nextSliceStart = currentSlice.nextEventNumber;

      events.push(...currentSlice.events.map(this.convertToEnvelope));
    } while (!currentSlice.isEndOfStream);

    conn.close();
    debug(`Got the ${events.length} events`);

    return events;
  }

  private convertToEnvelope(event: EventStore.ResolvedEvent): EventEnvelope {
    const e = event.event;

    const metadata = JSON.parse(e.metadata.toString());

    return new EventEnvelope({
      id: new Guid(e.eventId),
      created: new Date(e.createdEpoch),
      eventData: JSON.parse(e.data.toString()),
      eventType: e.eventType,
      metadata,
      aggregateId: metadata.aggregateId,
      aggregateType: metadata.aggregateType,
      version: e.eventNumber
    });
  }

  private saveEvents(aggtType: Type, aggtId: Guid, events: DomainEvent[], expectedVersion: number): Promise<EventStore.WriteResult[]> {
    if (!events || events.length === 0)
      throw new Error('Parameter events cannot be null or empty');

    const streamName = this.getStreamName(aggtType, aggtId);

    const evtsData = events.map(evt =>
        EventStore.createJsonEventData(
            new Guid().toString(),
            evt,
            {
              aggregateType: aggtType.name,
              aggregateId: aggtId.toString()
            },
            evt[Symbols.EventName]));

    debug(`Saving events to stream ${streamName}`);

    return Promise.resolve(this.withConn(
      conn =>
        Bluebird.mapSeries<EventStore.EventData, EventStore.WriteResult>(
          evtsData,
          evt =>
            Bluebird.resolve(
              conn.appendToStream(streamName, expectedVersion, evt)
                .then(result => {
                  expectedVersion = result.nextExpectedVersion;

                  return result;
                })
            )
        )
    ));
  }

  private getEvents(streamName: string, start: number, limit: number = 4096): Promise<EventStore.StreamEventsSlice> {
    return Promise.resolve(this.withConn<EventStore.StreamEventsSlice>(conn =>
      Bluebird.resolve(conn.readStreamEventsForward(streamName, start, limit))
    ));
  }

  private withConn<T>(f: (conn: EventStore.EventStoreNodeConnection) => Bluebird<T>): Bluebird<T> {
    return this.connect()
      .then( conn => {
        return f(conn)
        .then( (res) => {
          conn.close();

          return res;
        });
      });

  }

  private connect(): Bluebird<EventStore.EventStoreNodeConnection> {
    const conn = EventStore.createConnection(this.settings, `tcp://${this.host}:${this.port}`);

    return Bluebird.resolve(conn.connect().then(() => conn));
  }

  private getStreamName(type: Type, id: Guid): string {
    return `${type.name}-${id.toString().toUpperCase()}`;
  }
}
