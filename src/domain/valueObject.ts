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
export class ValueObject<TObject> extends ExtendedObject {

  /**
   * @param ctr Your value object's constructor
   * @param propNames Name of the properties to pass to constructor IN ORDER
   */
  constructor(private ctr: new(...args: any[]) => TObject, private propNames: (keyof TObject)[]) {
    super();
  }

  public equals(other: ValueObject<TObject>): boolean {
    return !Object.keys(this).some(prop => {
      // return true if prop is different
      if (typeof this[prop].equals === 'function') {
        return !this[prop].equals(other[prop]);
      }

      return this[prop] !== other[prop];
    });
  }

  protected newInstanceWith(updatedProps: Partial<TObject>): TObject {
    return new this.ctr(...this.propNames.map(p =>
      updatedProps.hasOwnProperty(p) ? updatedProps[p] : (<any>this)[p]));
  }
}
