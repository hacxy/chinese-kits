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
import { getTodayDateDiff } from 'chinese-kits';
getTodayDateDiff() // 34
```

## 查看源码

[lunar/index.ts:67](https://github.com/hacxy/chinese-kits/blob/5c621ab0a6cec1eb5e94454c7b7c22a7620aec4b/src/lunar/index.ts#L67)
