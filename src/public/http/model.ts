/**
 * @Date 2019-11-27 17:12:36
 * @Remark block1
 */

import { AxiosResponse } from "axios";

export const BLANK_RESPONSE: AxiosResponse<null> = {
  data: null,
  status: 999,
  statusText: "自定义错误",
  headers: {},
  config: {},
};

export interface OpenOption {
  long?: boolean | number; // 布尔是默认设置, 数字是特殊设置
  fresh?: boolean;
  postQuery?: any; // 一个查询字符串,post上可能会有这个
}

export const openOption: OpenOption = {
  long: false,
  fresh: false,
};

// http和其它code对应信息
export const ERROR_CODE_MAP: NumCodeMap<string> = {
  // 自定义
  999: "出现问题，稍后再试",
  998: "无上传文件",
  // 标准
  403: "访问被禁止",
  404: "资源不存在",
  405: "不允许此请求方法",
  406: "请求格式不可得",
  415: "服务器不支持参数格式",
  500: "服务器发生错误",
  502: "网关错误",
  503: "服务暂时不可用",
  504: "网关超时",
};
