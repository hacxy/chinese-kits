**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getLunarDate()

### 根据公历日期获取农历年月日,超过2100年12月31日则返回null

<a id="undefined" name="undefined"></a>

> **getLunarDate**(`date`?, `template`?): `null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `date`? | [`DateType`](../type-aliases/DateType.md) | 公历日期,不传为今天 |
| `template`? | `string` | 格式化模板,与dayjs保持一致,例如:YYYY-MM-DD |

## 返回值类型

`null` \| `string` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 示例

```ts
import { getLunarDate } from 'chinese-kits';
getLunarDate(new Date('2024-04-21')) // { lunarYear: 2024, lunarMonth: 3, lunarDay: 13 }
```

## 查看源码

[lunar/index.ts:20](https://github.com/hacxy/chinese-kits/blob/5b1794424faad6636f4b4dcee5780ecb7274c1f6/src/lunar/index.ts#L20)
