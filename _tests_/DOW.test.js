import Day from '../src/DOW.js';

describe('Day', () => {

  test('should correctly create a date object from a string', () => {
    const inputtedDate = new Date(2021,11,1);
    expect(inputtedDate.getFullYear()).toEqual(2021);
  });

});