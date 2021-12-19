import Day from '../src/DOW.js';

describe('Day', () => {

  test('should correctly create a date object from inputted elements', () => {
    const inputtedDate = new Date(2021,11,19);
    expect(inputtedDate.getFullYear()).toEqual(2021);
    expect(inputtedDate.getMonth()).toEqual(11);
    expect(inputtedDate.getDate()).toEqual(19);
  });
  test('should correctly identify the DOW', () => {
    const inputtedDate = new Date(2021,11,19);
    expect(inputtedDate.getDay()).toEqual(0);
  });
  test('should generate a date object from a standard string', () => {
    const dateString = "12/19/2021";
    let inputtedDate = Day(dateString);
    expect(inputtedDate.getFullYear()).toEqual(2021);
    expect(inputtedDate.getMonth()).toEqual(11);
    expect(inputtedDate.getDate()).toEqual(19);
    
  });

});