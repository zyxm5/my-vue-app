/*
 * @Author: zyxm5
 * @Date: 2021-03-01 14:58:00
 * @LastEditors: zyxm5
 * @LastEditTime: 2021-03-01 15:02:08
 * @Description: 工具类入口文件
 */

import { Message } from "./message";

export * from "./message";
/**
 * 以origin为基准合并选项
 * @param {*} base
 * @param {*} mixin
 */
export function mergeOptions(base = {}, mixin = {}) {
  // 如果mixin不是对象，结束
  if (typeof mixin !== "object" || !mixin) {
    return base;
  }
  if (typeof base !== "object" || !base) {
    return mixin;
  }
  const res = deepClone(base);
  for (const key in mixin) {
    // eslint-disable-next-line no-prototype-builtins
    if (mixin.hasOwnProperty(key)) {
      // 如果base中已存在，则递归merge
      const item = mixin[key];
      if (res[key]) {
        res[key] = mergeOptions(res[key], item);
      } else {
        // 不存在则直接赋值mixin
        res[key] = item;
      }
    }
  }
  return res;
}

/**
 * 深克隆
 * @param {*} origin
 * @param {*} target
 */
export function deepClone(origin, target) {
  target = Array.isArray(origin) ? [] : {};
  for (const item in origin) {
    // eslint-disable-next-line no-prototype-builtins
    if (origin.hasOwnProperty(item)) {
      target[item] =
        typeof origin[item] !== "object" || origin[item] === null
          ? origin[item]
          : deepClone(origin[item]);
    }
  }
  return target;
}

/**
 * 日期格式化
 * @param {*} value 待转化的日期
 * @param {*} format 格式
 */
export function dateFormat(value, format = "yyyy-MM-dd") {
  if (!value) {
    return;
  }
  // eslint-disable-next-line no-unsafe-negation
  if (!(value instanceof Date)) {
    value = new Date(value);
  }
  const year = value.getFullYear();

  const month = value.getMonth();
  const date = value.getDate();
  const hours = value.getHours();
  const minutes = value.getMinutes();
  const seconds = value.getSeconds();
  const obj = {
    yyyy: year,
    yy: ("" + year).slice(2),
    MM: ("0" + (month + 1)).slice(-2),
    M: month + 1,
    dd: ("0" + date).slice(-2),
    d: date,
    HH: ("0" + hours).slice(-2),
    H: hours,
    hh: ("0" + (hours > 12 ? hours - 12 : hours)).slice(-2),
    h: hours > 12 ? hours - 12 : hours,
    mm: ("0" + minutes).slice(-2),
    m: minutes,
    ss: ("0" + seconds).slice(-2),
    s: seconds,
    w: ["日", "一", "二", "三", "四", "五", "六"][value.getDay()]
  };
  return format.replace(/[a-z]+/gi, $ => obj[$]);
}
/**
 * @description: 表格数据排序
 * @param { Array } data 原数据
 * @param { Number } currentPage 当前页码
 * @return { Array }
 */
export function dataSort(data, currentPage) {
  if (data instanceof Array) {
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        data[i].fNum = i + 1 + (currentPage - 1) * 50;
      }
    }
  }
  return data;
}
/**
 * 校验文件格式，大小，文件名
 * file： 文件
 * typeArr: 文件类型，arr
 * maxSize：大小
 */
export function fileCheck(file, typeArr = [], maxSize) {
  let flag = true;
  //校验文件格式
  if (typeArr.length) {
    flag = typeArr.includes(suffix(file.name));
    if (!flag) {
      Message.warning("文件格式不正确");
      return false;
    }
  }
  if (maxSize) {
    //校验文件大小
    flag = file.size / 1024 / 1024 > maxSize;
    if (flag) {
      Message.warning(`上传文件大小不允许超过 ${maxSize} MB`);
      return false;
    }
  }

  //校验文件名称
  // flag = formatCheck.isNumCharLine(file.name);
  // if(!flag) {
  // 	Message.warning('文件名称由字母、数字、下划线或中间线组成，并以字母开头');
  // 	return false;
  // }
  return true;
}

/**
 * 截取后缀名
 */
export function suffix(str) {
  let index = str.lastIndexOf(".") + 1;
  let ext = str.substring(index);
  return ext.toLowerCase();
}
