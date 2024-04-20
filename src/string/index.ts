/**
 * @name 判断字符串是否只有中文
 * @group 字符串
 * @param str 任意字符串
 * @returns
 */
export const isOnlyChinese = (str: string): boolean => {
  const reg = /^[\u4e00-\u9fa5]+$/;
  return reg.test(str);
};

/**
 * @name 判断字符串是否包含中文
 * @group 字符串
 * @param str 任意字符串
 * @returns
 */
export const isContainsChinese = (str: string): boolean => {
  const reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
  return reg.test(str);
};

/**
 * @name 判断是否为中国手机号
 * @group 手机号
 * @param phoneNumber 手机号
 * @returns
 */
export const isChinesePhoneNumber = (phoneNumber: string) => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phoneNumber);
};
