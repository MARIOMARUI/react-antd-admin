/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-29 09:27:15
 */
/**
 * @Date 2021-06-10 18:57:00
 * @Remark block2
 */

import { AppMode, APP_MODE_MAP, Domain } from "./model";

// APP模式
// 只有打包时候才设置为PROD模式,这个模式会打开远程bug报告
// export const APP_MODE = APP_MODE_MAP.DEV; // APP模式
export const APP_MODE = APP_MODE_MAP.BETA; // APP模式
// export const APP_MODE = APP_MODE_MAP.PROD; // APP模式

// APP版本号
export const APP_VERSION = `0.8.0 ${APP_MODE}`;

// 开发环境配置
const DEV_DOMAIN: Domain = {
  // 本地开发直接修改setupProxy.js
};

// 测试环境配置
const BETA_DOMAIN: Domain = {
  // 本地开发直接修改setupProxy.js
};

// 生产环境配置
const PROD_DOMAIN: Domain = {
  // 本地开发直接修改setupProxy.js
};

// -----------------------------------------------------------------------
function chooseDomain(mode: AppMode) {
  if (mode === APP_MODE_MAP.BETA) {
    return BETA_DOMAIN;
  }
  if (mode === APP_MODE_MAP.PROD) {
    return PROD_DOMAIN;
  }
  return DEV_DOMAIN;
}
export function isDevMode() {
  return APP_MODE === APP_MODE_MAP.DEV;
}
export function isBetaMode() {
  return APP_MODE === APP_MODE_MAP.BETA;
}
export function isProdMode() {
  return APP_MODE === APP_MODE_MAP.PROD;
}
export function isNotProdMode() {
  return APP_MODE !== APP_MODE_MAP.PROD;
}
// -----------------------------------------------------------------------
// 返回server配置
export const APP_DOMAIN = chooseDomain(APP_MODE);
