export const Symbols = {
  EventName: Symbol.for('cashfarm.plow.event.name'),
  /**
   * Use to specify the function which
   * will load the event from the event store
   */
  EventLoader: Symbol.for('cashfarm.plow.event.loader'),

  ProjectionEvents: Symbol.for('cashfarm.plow.projection.events'),
};
