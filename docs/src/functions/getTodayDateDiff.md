**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: getTodayDateDiff()

### 获取今天的农历日期与公历日期相差多少天,如果今天的农历日期超过2100年12月31日则返回null

<a id="undefined" name="undefined"></a>

> **getTodayDateDiff**(): `null` \| `number`

## 返回值类型

`null` \| `number`

## 示例

```ts
import { getDateDifference } from 'chinese-kits';
getDateDifference() // 34
```

## 查看源码

[lunar/index.ts:66](https://github.com/hacxy/chinese-kits/blob/29909c4ad8eb6617724f792e718a234cb4c5c5b7/src/lunar/index.ts#L66)
