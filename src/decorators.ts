import { container } from './container';
import { ConcreteType } from '@cashfarm/lang';

export const Projections = Symbol.for('cashfarm.plow.projections');

export function Projection(target: ConcreteType<any>) {
  container.bind(target).to(target);
  container.bind(Projections).to(target);
}
