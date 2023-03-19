import {
  calculateTimeDifference,
  convertSecondToHourMinSec,
  formatTimeDisplay,
} from '../time.utils';

describe('calculateTimeDifference', () => {
  it('should return the correct value', () => {
    jest.spyOn(Math, 'round').mockReturnValue(100);
    expect(calculateTimeDifference(10)).toBe(90);
  });
});

describe('convertSecondToHourMinSec', () => {
  it('should return the correct value', () => {
    expect(convertSecondToHourMinSec(1000)).toStrictEqual({
      hours: 0,
      minutes: 16,
      seconds: 40,
    });
  });
});

describe('formatTimeDisplay', () => {
  it('should return the correct value', () => {
    expect(
      formatTimeDisplay({
        hours: 0,
        minutes: 16,
        seconds: 40,
      })
    ).toMatch('0:16:40');
  });
});
