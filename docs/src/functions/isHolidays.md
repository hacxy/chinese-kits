**chinese-kits** • [Readme](../README.md) \| [API](../globals.md)

***

# 函数: isHolidays()

### 判断是否为节假日,仅支持2004-2024

<a id="undefined" name="undefined"></a>

> **isHolidays**(`date`?): `boolean`

## 参数

| 参数 | Type | Description |
| :------ | :------ | :------ |
| `date`? | [`DateType`](../type-aliases/DateType.md) | 日期,不传则判断今天 |

## 返回值类型

`boolean`

## 示例

``` ts
import { isHolidays } from 'chinese-kits'
isHolidays()
```

## 查看源码

[days/index.ts:16](https://github.com/hacxy/chinese-kits/blob/a681c346e928509daa8553fdd260fd31fe2b30cc/src/days/index.ts#L16)
