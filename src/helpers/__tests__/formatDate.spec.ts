import dayjs from 'dayjs';
import { formatDate } from '../formatDate';

describe('formatDate', () => {
  it("should return just time for today's date", () => {
    const date = dayjs().hour(14).minute(30).second(0).millisecond(0);
    
    const formattedDate = formatDate(date.toISOString());
    expect(formattedDate).toBe(date.format('hh:mm A'));
  });

  it('should return "MMM D" format for the same year and not today date', () => {
    const date = dayjs().subtract(1, 'month').startOf('day');
    const expected = date.format('MMM D');

    const formattedDate = formatDate(date.toISOString());
    expect(formattedDate).toBe(expected);
  });

  it('should return "DD/MM/YY" for not the current year', () => {
    const date = dayjs('2022-08-15T10:30:00Z');

    const formattedDate = formatDate(date.toISOString());
    expect(formattedDate).toBe(date.format('DD/MM/YY'));
  });
});
