**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getTodayLunarDate()

### 获取今天的农历年月日,如果当前日期超过了2100年12月31日则返回null

<a id="undefined" name="undefined"></a>

> **getTodayLunarDate**(`template`?): `null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `template`? | `string` | 格式化模板,与dayjs保持一致,例如:YYYY-MM-DD |

## 返回值类型

`null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 示例

```ts
import { getTodayLunarDate } from 'chinese-kits';
getTodayLunarDate(); // { lunarYear: 2023, lunarMonth: 1, lunarDay: 1 }
```

## 查看源码

[lunar/index.ts:19](https://github.com/hacxy/chinese-kits/blob/29909c4ad8eb6617724f792e718a234cb4c5c5b7/src/lunar/index.ts#L19)
