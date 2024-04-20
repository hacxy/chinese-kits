# chinese-ts

🇨🇳 中国的 javascript 工具集, 旨在帮助中国人更方便更快捷的处理国内特有需求的 javascript 工具库.

这个库名称的由来: **chinese** 可以译为: '中国的', 而 **ts** 即表示 toolset 的缩写, 同时还因为它是使用 typescript 开发的.

[查阅文档](https://chinese-ts.hacxy.cn)

## 安装

- 使用 npm 安装

```bash
npm install chinese-ts
```

- 使用 pnpm 安装

```bash
pnpm add chinese-ts
```

- 使用 yarn 安装

```bash
yarn add chinese-ts
```

- 国内还可以使用 cnpm 安装

```bash
cnpm install chinese-ts
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
    <script src="https://unpkg.com/chinese-ts/dist/index.iife.js"></script>
    <script>
      CHINESE_TS.getCityAlias('北京'); // => '京'
    </script>
  </body>
</html>
```

### ESM 方式

```js
import { getCityAlias } from 'chinese-ts';
getCityAlias('北京'); // => '京'
```

### CJS 方式

```js
const { getCityAlias } = require('chinese-ts');
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

数据来源于[香港大学天文台](https://www.hko.gov.hk/tc/gts/time/conversion1_text.htm#)(1900-2100 年), 相关方法依赖于第三方库 [calendar](https://github.com/jjonline/calendar.js)

| 计划                             | 支持 |
| -------------------------------- | ---- |
| 获取今天的农历日期               | ✅   |
| 获取指定公历日期的农历日期       | ✅   |
| 计算公历日期与农历日期相差多少天 | 🚧   |
| 获取今年法定节假日               | 🚧   |

### 省份

| 计划                 | 支持 |
| -------------------- | ---- |
| 根据省份名称获取简称 | ✅   |
| 获取所有省份名称简称 | ✅   |

## 协议

[MIT](https://github.com/hacxy/chinese-ts/blob/main/LICENSE)
