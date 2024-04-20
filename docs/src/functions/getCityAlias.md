**chinese-ts** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getCityAlias()

### 根据英文或中文名称获取省份的简称

<a id="undefined" name="undefined"></a>

> **getCityAlias**(`name`): `undefined` \| `string`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | 省份的中文名称或者英文名称 |

## 返回值类型

`undefined` \| `string`

## 函数名称

根据英文或中文名称获取省份的简称

## 示例

```ts
import { getCityAbbreviation } from 'chinese-ts';
getCityAbbreviation('北京') // 京
getCityAbbreviation('Beijing') // 京
getCityAbbreviation('Hubei') // 鄂
```

## 查看源码

[city/index.ts:16](https://github.com/hacxy/chinese-ts/blob/32acbdf853347abfa1bfdabc5f0a01b2903b6758/src/city/index.ts#L16)
