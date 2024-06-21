**chinese-kit** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getTodayLunarDate()

### 获取今天的农历年月日,如果当前日期超过了2100年12月31日,则返回null

<a id="undefined" name="undefined"></a>

> **getTodayLunarDate**(): `null` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 返回值类型

`null` \| [`LunarDate`](../type-aliases/LunarDate.md)

## 函数名称

获取今天的农历年月日,如果当前日期超过了2100年12月31日,则返回null

## 示例

```ts
import { getTodayLunarDate } from 'chinese-ts';
getTodayLunarDate(); // { lunarYear: 2023, lunarMonth: 1, lunarDay: 1 }
```

## 查看源码

[lunar/index.ts:14](https://github.com/hacxy/chinese-kit/blob/49e6f8f01f8481c0a00e21902b1dd967b6160bdd/src/lunar/index.ts#L14)
