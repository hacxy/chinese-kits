import { expect, test } from 'vitest';
import { isContainsChinese, isOnlyChinese } from '../dist';

test('判断是否只有中文, 输入: “hhh123你好” 输出: false', () => {
  expect(isOnlyChinese('hhh123你好')).toBe(false);
});
test('判断是否只有中文, 输入: “hhh123” 输出: false', () => {
  expect(isOnlyChinese('hhh123')).toBe(false);
});
test('判断是否只有中文, 输入: “ ” 输出: false', () => {
  expect(isOnlyChinese(' ')).toBe(false);
});
test('判断是否只有中文, 输入: “你好” 输出: true', () => {
  expect(isOnlyChinese('你好')).toBe(true);
});
test('判断是否包含中文, 输入: “hhh123你好” 输出: true', () => {
  expect(isContainsChinese('hhh123你好')).toBe(true);
});

test('判断是否包含中文, 输入: “/你好.” 输出: true', () => {
  expect(isContainsChinese('/你好.')).toBe(true);
});
test('判断是否包含中文, 输入: “hhh123” 输出: false', () => {
  expect(isContainsChinese('hhh123')).toBe(false);
});
