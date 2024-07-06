import { DateType } from '@/lunar';
import { holidays, workdays, inLieuDays } from '../data/days.json';
import dayjs from 'dayjs';

/**
 * @name 判断是否为节假日,仅支持2004-2024
 * @group 节假日
 * @param date 日期,不传则判断今天
 * @returns
 * @example
 * ``` ts
 * import { isHolidays } from 'chinese-kits'
 * isHolidays()
 * ```
 */
export const isHolidays = (date?: DateType) => {
  const finalDate = dayjs(date).format('YYYY-MM-DD');
  const dayKeys = Object.keys(holidays);
  return dayKeys.includes(finalDate);
};

/**
 * @name 判断是否为工作日,仅支持2004-2024
 * @group 节假日
 * @param date 日期,不传则判断今天
 *
 */
export const isWorkdays = (date?: DateType) => {
  const finalDate = dayjs(date).format('YYYY-MM-DD');
  const dayKeys = Object.keys(workdays);
  return dayKeys.includes(finalDate);
};

/**
 * @name 判断是否为调休日,仅支持2004-2024
 * @group 节假日
 * @param date 日期,不传则判断今天
 *
 */
export const isInLieuDays = (date: DateType) => {
  const finalDate = dayjs(date).format('YYYY-MM-DD');
  const dayKeys = Object.keys(inLieuDays);
  return dayKeys.includes(finalDate);
};
