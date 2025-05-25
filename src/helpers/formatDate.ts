import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday' 

dayjs.extend(isToday);

export function formatDate(date: string) {
  const currentDate = dayjs(date);
  const isCurrentYear = currentDate.year() === dayjs().year();

  const formattedDate = isCurrentYear ? currentDate.format('MMM D') : currentDate.format('DD/MM/YY')
  return currentDate.isToday() ? currentDate.format('hh:mm A') : formattedDate;
}