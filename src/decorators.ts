import { container } from './container';
import { ConcreteType } from '@cashfarm/lang';

import { Symbols } from './symbols';

export const Projections = Symbol.for('cashfarm.plow.projections');


export function Projection(...events: ConcreteType<any>[]): ClassDecorator {
  // @todo Check if there is a method to handle each of the events and throw an error if none is found
  return (target: ConcreteType<any>) => {
    if (!target[Symbols.ProjectionEvents]) {
      container.bind(target).to(target);
      container.bind(Projections).to(target);
      target[Symbols.ProjectionEvents] = events;
    }
    else {
      events.map(e => {
        if (target[Symbols.ProjectionEvents].indexOf(e) < 0)
          target[Symbols.ProjectionEvents].push(e);
      });
    }
  }
}
