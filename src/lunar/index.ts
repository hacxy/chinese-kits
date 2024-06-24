import { DateType, LunarDate } from '@/lunar/types';
import calendar from 'js-calendar-converter';
import { isString } from 'tianjie';
import dayjs from 'dayjs';

export * from './types';

/**
 * @name 获取今天的农历年月日,如果当前日期超过了2100年12月31日则返回null
 * @param template 格式化模板,与dayjs保持一致,例如:YYYY-MM-DD
 * @group 农历
 * @returns
 * @example
 * ```ts
 * import { getTodayLunarDate } from 'chinese-kits';
 * getTodayLunarDate(); // { lunarYear: 2023, lunarMonth: 1, lunarDay: 1 }
 * ```
 */
export const getTodayLunarDate = (template?: string) => {
  const today = new Date();
  return getLunarDate(today, template);
};

/**
 * @name 获取指定日期的农历年月日,超过2100年12月31日则返回null
 * @group 农历
 * @param date
 * @param 格式化模板,与dayjs保持一致,例如:YYYY-MM-DD
 * @returns
 * @example
 * ```ts
 * import { getLunarDate } from 'chinese-kits';
 * getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
 * ```
 */
export const getLunarDate = (date: DateType, template?: string): LunarDate | string | null => {
  const dateValue = dayjs(date);
  const year = dateValue.get('year');
  const month = dateValue.get('M') + 1;
  const day = dateValue.get('D');

  const lunarDate = calendar.solar2lunar(year, month, day);
  if (lunarDate) {
    if (template) {
      return dayjs(`${lunarDate.lYear}-${lunarDate.lMonth}-${lunarDate.lDay}`).format(template);
    }
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
 * @name 获取今天的农历日期与公历日期相差多少天,如果今天的农历日期超过2100年12月31日则返回null
 * @group 农历
 * @returns
 * @example
 * ```ts
 * import { getTodayDateDiff } from 'chinese-kits';
 * getTodayDateDiff() // 34
 * ```
 */
export const getTodayDateDiff = () => {
  const todaySolarDate = dayjs().format('YYYY-MM-DD');
  const todayLunarDate = getTodayLunarDate('YYYY-MM-DD');

  if (isString(todayLunarDate)) {
    const ldate = dayjs(todayLunarDate);
    const sdate = dayjs(todaySolarDate);

    return sdate.diff(ldate, 'day');
  } else {
    return null;
  }
};

/**
 *
 * @name 输入一个公历日期,计算出与农历相差多少天
 * @param date
 * @group 农历
 * @returns
 */
export const getDateDiff = (date: DateType) => {
  const solarDate = dayjs(date).format('YYYY-MM-DD');
  const lunarDate = getLunarDate(date, 'YYYY-MM-DD');

  if (isString(lunarDate)) {
    const ldate = dayjs(lunarDate);
    const sdate = dayjs(solarDate);

    return sdate.diff(ldate, 'day');
  } else {
    return null;
  }
};
