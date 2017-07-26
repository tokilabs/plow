"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const plow_1 = require("@cashfarm/plow");
class TestVO extends plow_1.ValueObject {
    constructor(name, value) {
        super(TestVO, ['name', 'value']);
        this.name = name;
        this.value = value;
    }
    setName(name) {
        return this.newInstanceWith({ name });
    }
    setValue(value) {
        return this.newInstanceWith({ value });
    }
}
ava_1.test('Updating a VO property should return a new, modified, instance.', t => {
    const tvo = new TestVO('Some Name', 1);
    const tvoNewName = new TestVO('Another Name', 1);
    const tvoNewVal = new TestVO('Some Name', 2);
    t.deepEqual(tvo.setName('Another Name'), tvoNewName);
    t.deepEqual(tvo.setValue(2), tvoNewVal);
    t.deepEqual(tvo, new TestVO('Some Name', 1));
});
//# sourceMappingURL=valueObject.spec.js.map