**chinese-kit** • [Readme](../README.md) \| [API](../globals.md)

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

[lunar/index.ts:44](https://github.com/hacxy/chinese-kit/blob/49e6f8f01f8481c0a00e21902b1dd967b6160bdd/src/lunar/index.ts#L44)
