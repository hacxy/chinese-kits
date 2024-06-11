import { cityData } from '@/constants';
/**
 * @name 根据英文或中文名称获取省份的简称
 * @group 省份
 * @param name 省份的中文名称或者英文名称
 * @returns
 * @example
 * ```ts
 * import { getCityAbbreviation } from 'chinese-ts';
 * getCityAbbreviation('北京') // 京
 * getCityAbbreviation('Beijing') // 京
 * getCityAbbreviation('Hubei') // 鄂
 * ```
 */
export const getCityAlias = (name: string) => {
  const cityInfo = cityData.find((item) => item.name === name || item.enName === name);
  return cityInfo?.alias;
};

/**
 * @name 获取所有省份的简称
 * @group 省份
 * @returns
 * @example
 * ```ts
 * import { getCityAllAbbreviation } from 'chinese-ts';
 * getCityAllAbbreviation() // [ '京', '粤', '闽', '浙', '沪', '鄂', '湘', '赣', '琼', '津', '渝', '冀', '豫', '皖', '桂', '川', '黔', '晋', '辽', '吉', '黑', '苏', '鲁', '云', '陕', '甘', '青', '蒙', '宁', '新', '藏', '港', '澳', '台' ]
 * ```
 */
export const getAllCityAlias = () => {
  return cityData.map((item) => item.alias);
};
