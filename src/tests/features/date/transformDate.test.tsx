import { transformDate } from '../../../features/date/transformDate';

const testedDate = '2022-02-24';
const testedDateSecond = '02-24-2022';
const expectedDateFormat = '24/02/2022';

describe('transformDate en-GB helper', () => {
  test('should render formated date as string from string', () => {
    const date = transformDate(testedDate);
    const dateTwo = transformDate(testedDateSecond);

    expect(date).toBe(expectedDateFormat);
    expect(dateTwo).toBe(expectedDateFormat);
  });

  test('should render formated date as string from Date', () => {
    const value = new Date(testedDate);
    const date = transformDate(value);

    expect(date).toBe(expectedDateFormat);
  });

  test('should render empty string from undefined', () => {
    const value = undefined;
    const date = transformDate(value);

    expect(date).toBe('');
  });

  test('should render "Invalid Date" string from empty string', () => {
    const date = transformDate('');

    expect(date).toBe('Invalid Date');
  });

  test('should render date only with "/" separator', () => {
    const date = transformDate(testedDate);

    expect(date).toMatch(/\//);
    expect(date).not.toMatch(/-./);
  });
});
