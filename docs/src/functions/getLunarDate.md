**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getLunarDate()

### 获取指定日期的农历年月日,超过2100年12月31日则返回null

<a id="undefined" name="undefined"></a>

> **getLunarDate**(`date`, `template`?): `null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` |  |
| `template`? | `string` | - |

## 返回值类型

`null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 示例

```ts
import { getLunarDate } from 'chinese-kits';
getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
```

## 查看源码

[lunar/index.ts:36](https://github.com/hacxy/chinese-kits/blob/29909c4ad8eb6617724f792e718a234cb4c5c5b7/src/lunar/index.ts#L36)
