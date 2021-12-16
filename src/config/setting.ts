/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-27 17:17:09
 */
/**
 * @Date 2020-04-15 14:16:44
 * @Remark block2
 */

import { isProdMode } from "./env";

// ROOT管理员账户ID
export const ROOT_ADMIN_ID = "615177282801942528";
// APP设置
export const APP_SETTING = {
  APP_NAME: "享锂来",
  APP_ID: "An4vp9uo",
};
// http设置
export const HTTP_SETTING = {
  RES_NOT_LOGIN_CODE: 1001, // 没有登录
  RES_SUCCESS_CODE: 1999, // 成功返回
  RES_ERROR_CODE: -4, // 业务异常,包括微服务错误也是,后端不区分前端也不区分了,随便
  TIMEOUT_SHORT: 20000,
  TIMEOUT_LONG: 60000,
};
// 验证码
export const VERIFY_CODE = {
  LENGTH: 6,
  INTERVAL_TIME: isProdMode() ? 60 : 10,
};
// 条数
export const PAGE_DEFAULT = {
  BEGIN: 1,
  SIZE: 15,
  SEARCH: 30,
};
// goEasy
export const GOEASY = {
  OPEN: false,
  HOST: "hangzhou.goeasy.io", // [hangzhou.goeasy.io |singapore.goeasy.io]
  APPKEY: "BC-xxx", // 应用appkey
};
