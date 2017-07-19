import { ExtendedObject } from '@cashfarm/lang';

/**
 * Base class for ValueObject's
 *
 * A value object is an object whose identitiy is
 * determined by it's properties values.
 *
 * Value objects MUST:
 * - Be immutable
 * - Be compared by value-equality
 * @export
 * @class ValueObject
 */
export class ValueObject extends ExtendedObject {
  public equals(other: ValueObject): boolean {
    return !Object.keys(this).some(prop => {
      // return true if prop is different
      if (typeof this[prop].equals === 'function') {
        return !this[prop].equals(other[prop]);
      }

      return this[prop] !== other[prop];
    });
  }
}
