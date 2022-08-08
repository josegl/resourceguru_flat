const flat = require('./index.js');

describe('Flat function', () => {
  test('flat([]) should return []', () => {
    expect(flat([])).toEqual([]);
  });
  test('flat([1,2,3]) should return [1,2,3]', () => {
    const control = [1,2,3];
    expect(flat(control)).toEqual(control);
  });
  test('flat([1,[2],3]) should return [1,2,3]', () => {
    const control = [1,2,3];
    const input = [1,[2],3];
    expect(flat(input)).toEqual(control);
  });
  test('flat([1,[[2]],3]) should return [1,2,3]', () => {
    const control = [1,2,3];
    const input = [1,[[2]],3];
    expect(flat(input)).toEqual(control);
  });
  test('flat([[[[]]]]) should return []', () => {
    const control = [];
    const input = [[[[]]]];
    expect(flat(input)).toEqual(control);
  });
  test('flat() should return undefined', () => {
    expect(flat()).toEqual(undefined);
  });
  test('flat(null) should return null', () => {
    expect(flat(null)).toEqual(null);
  });
  test('flat([null]) should return [null]', () => {
    const control = [null];
    expect(flat(control)).toEqual(control);
  });
  test('flat([[[[null]]]]) should return [null]', () => {
    const control = [null];
    const input = [[[[null]]]];
    expect(flat(input)).toEqual(control);
  });
});
