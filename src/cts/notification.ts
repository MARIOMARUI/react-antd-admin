/**
 * @Date 2020-01-15 19:08:51
 * @Remark
 */

// lib
import { notification } from "antd";
// config & script & public
// 其它

function info(title: string, desc: string) {
  notification.info({
    message: title,
    description: desc,
  });
}

function success(title: string, desc: string) {
  notification.success({
    message: title,
    description: desc,
  });
}

function warn(title: string, desc: string) {
  notification.warn({
    message: title,
    description: desc,
  });
}

function error(title: string, desc: string) {
  notification.error({
    message: title,
    description: desc,
  });
}

export default {
  info,
  success,
  warn,
  error,
};
