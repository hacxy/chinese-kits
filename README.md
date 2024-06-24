# chinese-kits

中国 Javascript 工具集, 旨在帮助国人更方便更快捷的处理国内特有需求的 Javascript 工具库

[查阅文档](https://chinese-ts.hacxy.cn) 了解更多用法

## 安装

- 使用 npm 安装

```bash
npm install chinese-kits
```

- 使用 pnpm 安装

```bash
pnpm add chinese-kits
```

- 使用 yarn 安装

```bash
yarn add chinese-kits
```

- 国内还可以使用 cnpm 安装

```bash
cnpm install chinese-kits
```

## 使用

### CDN 方式

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script src="https://unpkg.com/chinese-kits/dist/index.iife.js"></script>
    <script>
      CHINESE_TS.getCityAlias('北京'); // => '京'
    </script>
  </body>
</html>
```

### ESM 方式

```js
import { getCityAlias } from 'chinese-kits';
getCityAlias('北京'); // => '京'
```

### CJS 方式

```js
const { getCityAlias } = require('chinese-kits');
getCityAlias('北京'); // => '京'
```

## 计划与支持

### 字符串

| 计划                   | 支持 |
| ---------------------- | ---- |
| 判断是否包含中文字符串 | ✅   |
| 判断是否只有中文字符串 | ✅   |

### 手机号

| 计划                 | 支持 |
| -------------------- | ---- |
| 判断是否为中国手机号 | ✅   |

### 农历

农历日期数据来源于[香港天文台](https://www.hko.gov.hk/tc/gts/time/conversion1_text.htm#)(1900-2100 年)

| 计划                                   | 支持 |
| -------------------------------------- | ---- |
| 获取今天的农历日期                     | ✅   |
| 获取指定公历日期的农历日期             | ✅   |
| 计算今天的公历日期与农历日期相差多少天 | ✅   |

### 证件

| 计划                     | 支持 |
| ------------------------ | ---- |
| 判断是否为正确的身份证号 | 🚧   |

### 省份

| 计划                 | 支持 |
| -------------------- | ---- |
| 根据省份名称获取简称 | ✅   |
| 获取所有省份名称简称 | ✅   |

### 节假日

| 计划             | 支持 |
| ---------------- | ---- |
| 判断是否为节假日 | ✅   |
| 判断是否为工作日 | 🚧   |
| 判断是否为调休日 | 🚧   |

## 开源协议

[MIT](https://github.com/hacxy/chinese-ts/blob/main/LICENSE)
