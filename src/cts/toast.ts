/**
 * @Date 2019-09-28 14:13:22
 * @Remark
 */

// lib
import { message } from "antd";
// config & script & public
import manaNotification from "./notification";
// http
// business
// 其它

function msg(text: string) {
  message.info(text);
}

function success(text: string) {
  message.success(text);
}

function warn(text: string) {
  message.warn(text);
}

function error(text: string) {
  message.error(text);
}

function whenFailOrErr<T>(result: BagData<T>) {
  if (result.fail.length > 0) {
    message.warn(result.fail[0].message);
    return false;
  }
  if (result.err.length > 0) {
    manaNotification.error("SYSTEM ERROR", result.err[0].message);
    return false;
  }
  return true;
}

function whenErr<T>(result: BagData<T>) {
  if (result.err.length > 0) {
    message.error(result.err[0].message);
    return false;
  }
  return true;
}

export default {
  msg,
  success,
  warn,
  error,
  whenErr,
  whenFailOrErr,
};
