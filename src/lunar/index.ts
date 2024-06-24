import { DateType, LunarDate } from '@/lunar/types';
import calendar from 'js-calendar-converter';
import { isString } from 'tianjie';
import dayjs from 'dayjs';

export * from './types';

/**
 * @name 根据公历日期获取农历年月日,超过2100年12月31日则返回null
 * @group 农历
 * @param date 公历日期,不传为今天
 * @param template 格式化模板,与dayjs保持一致,例如:YYYY-MM-DD
 * @returns
 * @example
 * ```ts
 * import { getLunarDate } from 'chinese-kits';
 * getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
 * ```
 */
export const getLunarDate = (date?: DateType, template?: string): LunarDate | string | null => {
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
 *
 * @name 输入一个公历日期,计算出与农历相差多少天
 * @param date 公历日期,不传为今天
 * @group 农历
 * @returns
 */
export const getDateDiff = (date?: DateType) => {
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
