import { Guid } from '@cashfarm/lang';

export class InvalidIdentityValueException extends Error {
  constructor (value: string, identityTypeName: string) {
    super(`The value '${value}' isn't valid for creating an identity of type ${identityTypeName}`);
  }
}

export interface IIdentity<TId> {
    value: TId;
}

export abstract class Identity<TId> implements IIdentity<TId> {
  protected _value: TId;

  get value(): TId {
      return this._value;
  }

  constructor(value?: TId) {
    this._value = value;
  }

  public equals(other: Identity<TId>): boolean {
    return this === other || this._value === other._value;
  }

  public toString() {
    return this._value.toString();
  }

  public valueOf(): TId {
    return this._value;
  }

  public toJSON(): string {
    return this.toString();
  }
}

export class GuidIdentity extends Identity<Guid> {

  constructor();
  constructor(guid: string);
  constructor(guid: Guid);
  constructor(guid?: string | Guid) {
    super();

    if (guid instanceof Guid) {
      this._value = guid;
    }
    else if (typeof guid === 'string') {
      if (!Guid.isValidGuid(guid)) {
        throw new InvalidIdentityValueException(guid, 'GuidIdentity');
      }
      this._value = new Guid(<string>guid);
    }
    else {
      this._value = new Guid();
    }
  }

  public toString(): string {
    return this.value.toString().toUpperCase();
  }

  public toJSON(): string {
    return this.toString();
  }
}

export class IntIdentity extends Identity<number> {
  constructor(value: number) {
    super(value);
  }
}

export class StringIdentity extends Identity<string> {
  constructor(value: string) {
    super(value);
  }
}
