import { test } from 'ava';
import { expect } from 'chai';

import { ValueObject } from '@cashfarm/plow';

class TestVO extends ValueObject<TestVO> {
  public readonly name: string;
  public readonly value: number;

  constructor(name: string, value: number) {
    super(TestVO, ['name', 'value']);
  }

  public setName(name: string) {
    return this.newInstanceWith({ name });
  }

  public setValue(value: number) {
    return this.newInstanceWith({ value });
  }
}

test('Updating a ValueObject property should return a new, modified, instance.', t => {
  const tvo = new TestVO('Some Name', 1);
  const tvoNewName = new TestVO('Another Name', 1);
  const tvoNewVal = new TestVO('Some Name', 2);

  t.deepEqual(tvo.setName('Another Name'), tvoNewName);
  t.deepEqual(tvo.setValue(2), tvoNewVal);
  t.deepEqual(tvo, new TestVO('Some Name', 1));
});
