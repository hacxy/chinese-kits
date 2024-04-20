**chinese-ts** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getLunarDate()

### 获取指定日期的农历年月日

<a id="undefined" name="undefined"></a>

> **getLunarDate**(`date`): `null` \| `object`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` |  |

## 返回值类型

`null` \| `object`

## 函数名称

获取指定日期的农历年月日

## 示例

```ts
import { getLunarDate } from 'chinese-ts';
getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
```

## 查看源码

[lunar/index.ts:44](https://github.com/hacxy/chinese-ts/blob/32acbdf853347abfa1bfdabc5f0a01b2903b6758/src/lunar/index.ts#L44)
