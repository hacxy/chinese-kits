import { LunarDate } from '@/lunar/types';
import calendar from 'js-calendar-converter';
export * from './types';
/**
 * @name 获取今天的农历年月日,如果当前日期超过了2100年12月31日,则返回null
 * @group 农历
 * @returns
 * @example
 * ```ts
 * import { getTodayLunarDate } from 'chinese-ts';
 * getTodayLunarDate(); // { lunarYear: 2023, lunarMonth: 1, lunarDay: 1 }
 * ```
 */
export const getTodayLunarDate = (): LunarDate | null => {
  // 获取当前日期的年月日
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const lunarDate = calendar.solar2lunar(year, month, day);
  if (lunarDate) {
    return {
      lunarYear: lunarDate.lYear,
      lunarMonth: lunarDate.lMonth,
      lunarDay: lunarDate.lDay
    };
  } else {
    return null;
  }
};

/**
 * @name 获取指定日期的农历年月日
 * @group 农历
 * @param date
 * @returns
 * @example
 * ```ts
 * import { getLunarDate } from 'chinese-ts';
 * getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
 * ```
 */
export const getLunarDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const lunarDate = calendar.solar2lunar(year, month, day);
  if (lunarDate) {
    return {
      lunarYear: lunarDate.lYear,
      lunarMonth: lunarDate.lMonth,
      lunarDay: lunarDate.lDay
    };
  } else {
    return null;
  }
};
