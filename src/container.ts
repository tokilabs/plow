import { Container, decorate, injectable, unmanaged } from 'inversify';
import { makeProvideDecorator, makeFluentProvideDecorator } from 'inversify-binding-decorators';

// Import classes here so they can register themselves
// tslint:disable:no-import-side-effect

const debug = require('debug')('plow:ioc');

const _container = new Container();

//
// Make provide and FluentProvide decorators
//
const realProvide = makeProvideDecorator(_container);

const _provide = (target: any) => {
  debug('Providing:', typeof target === 'function' ? target.name : target, `(${_container.guid})\n\t\tin`, module.parent.filename);

  return realProvide(target);
};

const _fluentProvide = makeFluentProvideDecorator(_container);

//
// create a unique, global symbol name
// -----------------------------------

const PROVIDE = Symbol.for('cashfarm.plow.provide');
const FLUENT_PROVIDE = Symbol.for('cashfarm.plow.fluentProvide');
const CONTAINER = Symbol.for('cashfarm.plow.container');

// check if the global object has this symbol
// add it if it does not have the symbol, yet
// ------------------------------------------

const globalSymbols = Object.getOwnPropertySymbols(global);

if (!(globalSymbols.indexOf(CONTAINER) > -1)) {
  global[PROVIDE] = _provide;
  global[FLUENT_PROVIDE] = _fluentProvide;
  global[CONTAINER] = _container;
}

// define the singleton API
// ------------------------

const singleton: {
  container: Container;
  provide(target: any): any;
  fluentProvide(target: any): any;
} = <any> {};

Object.defineProperty(singleton, 'provide', {
  get: () => {
    return global[PROVIDE];
  }
});

Object.defineProperty(singleton, 'fluentProvide', {
  get: () => {
    return global[FLUENT_PROVIDE];
  }
});

Object.defineProperty(singleton, 'container', {
  get: () => {
    return global[CONTAINER];
  }
});

// ensure the API is never changed
// -------------------------------

Object.freeze(singleton);

// export the singleton API only
// -----------------------------

export const {
  container,
  provide,
  fluentProvide
} = singleton;
