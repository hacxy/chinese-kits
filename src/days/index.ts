import { DateType } from '@/lunar';
import { holidays } from '../data/days.json';
import dayjs from 'dayjs';

/**
 * @name 判断是否为节假日
 * @group 节假日
 * @param date 时间,不传则判断今天
 * @returns
 */
export const isHolidays = (date?: DateType) => {
  const finalDate = dayjs(date).format('YYYY-MM-DD');
  const dayKeys = Object.keys(holidays);
  return dayKeys.includes(finalDate);
};
