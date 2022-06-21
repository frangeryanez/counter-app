import { returnArray } from '../../src/base/07-array-destructuring';

describe('Test on file 07-array-destructuring.js', () => {
  test('returnArray should return a string and number', () => {
    //const arrayTest = returnArray();
    //expect(arrayTest).toEqual(['ABC', 123]);

    const [letters, numbers] = returnArray();

    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    //expect any type of string
    expect(letters).toEqual(expect.any(String))

    expect(numbers).toBe(123);
    expect(typeof numbers).toBe('number');
    //expect any type of number
    expect(numbers).toEqual(expect.any(Number))
  });
});