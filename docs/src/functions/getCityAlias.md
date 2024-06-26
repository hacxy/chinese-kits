**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

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

## 示例

```ts
import { getCityAbbreviation } from 'chinese-ts';
getCityAbbreviation('北京') // 京
getCityAbbreviation('Beijing') // 京
getCityAbbreviation('hubei') // 鄂
```

## 查看源码

[city/index.ts:15](https://github.com/hacxy/chinese-kits/blob/a681c346e928509daa8553fdd260fd31fe2b30cc/src/city/index.ts#L15)
