import test from 'ava';
import * as EventStore from 'node-eventstore-client';

import { AggregateRoot, DomainEvent, GesEventStore, GuidIdentity } from '@cashfarm/plow';

const Debug = require('debug')('test');

class DumbEvent extends DomainEvent {
  constructor(public randomVal: any) {
    super();
  }
}

const events: DomainEvent[] = [
  new DumbEvent(1),
  new DumbEvent(2),
  new DumbEvent(3),
  new DumbEvent(4)
];

let afterSave: PromiseLike<any>;

test(`GES Client | Can save events`, async t => {
  const ges = new GesEventStore();

  afterSave = (<any>ges).saveEvents('dummystream', events, EventStore.expectedVersion.noStream);

  afterSave.then(res => {
    t.is(res.length, events.length);
  });
});

test(`GES Client | Can read events`, async t => {
  afterSave.then(async () => {
    const ges = new GesEventStore();

    const stream = await (<any>ges).getEvents('dummystream', 0, 10);

    t.is(stream.events.length, 4);
  });
});
