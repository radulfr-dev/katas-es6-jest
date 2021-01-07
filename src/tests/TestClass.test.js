import Test from '../classes/TestClass.js';

describe('My Test Suite', () => {
    it('My Test Case', () => {
        expect(true).toEqual(true);
    });
});

describe('Test Function', () => {
    it('should just say 69', () => {
        let test = new Test();
        expect(test.testFunction()).toEqual(69);
    });
});
