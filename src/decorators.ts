import { container } from './container';
import { ConcreteType } from '@cashfarm/lang';

export const Controllers = Symbol.for('cashfarm.plow.controllers');

export function Controller(target: ConcreteType<any>) {
  container.bind(target).to(target);
  container.bind(Controllers).to(target);
}

export const Projections = Symbol.for('cashfarm.plow.projections');

export function Projection(target: ConcreteType<any>) {
  container.bind(target).to(target);
  container.bind(Projections).to(target);
}
