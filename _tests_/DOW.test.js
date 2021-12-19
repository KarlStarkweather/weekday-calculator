import Day from '../src/DOW.js';

describe('Day', () => {
  test('should correctly make a Day object that has a day, month and year property', () =>{
    const newDay = new Day('12/1/2021');
    expect(newDay.year).toEqual(2021);
    expect(newDay.day).toEqual(1);
    expect(newDay.month).toEqual(12);
  });
  test('should correctly create a date object from the day, month and year', () => {
    const newDay = new Day('12/1/2021');
    const testDate = new Date(2021, 11, 1);
    expect(newDay.createDate()).toEqual(testDate);
  });
  test('should return a string of the weekday', () => {
    const newDay = new Day('12/19/2021');
    expect(newDay.DOW()).toEqual("Sunday");
  });
  test('should return work for future dates', () => {
    const newDay = new Day('12/25/2021');
    expect(newDay.DOW()).toEqual("Saturday");
  });
  test('should return work for past dates', () => {
    const newDay = new Day('11/25/2021');
    expect(newDay.DOW()).toEqual("Thursday");
  });

});