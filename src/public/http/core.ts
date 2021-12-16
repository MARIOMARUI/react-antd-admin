/**
 * @Date 2021-06-10 19:13:29
 * @Remark block1
 */

// axios
import axios, { AxiosInstance } from "axios";
// lib
import queryString from "query-string";
// config
import { HTTP_SETTING } from "config/setting";
// script & public
import logUtils from "utils/logUtils";
// store
import { userState } from "state/global";
// interface && type && class
// 其它

// 打印接口信息
export function show(api: Api, url: string, payload: any) {
  const { token } = userState;
  const msg = `api: ${api.title} | ${
    api.controller || api.remark || "无说明"
  } | method: ${api.method} | url: ${url} | params: ${JSON.stringify(
    payload,
  )} | token: ${token ? `${token.slice(0, 8)}(${token.length})` : "无token"}`;
  logUtils.info("req", msg);
}

// 生成url
export function createApiUrl(api: Api) {
  // 静态资源
  if (api.method === "STATIC") {
    return `/${api.path}`;
  }
  // api
  if (api.prefix !== "") {
    return `/${api.prefix}/${api.path}`;
  }
  // 无前缀
  const url = `/${api.path}`;
  return url;
}

/**
 * axios实例获得超时配置
 * @param long 获得默认配置或自定义
 */
export function getTimeout(long?: boolean | number) {
  let timeout = HTTP_SETTING.TIMEOUT_SHORT;
  if (typeof long === "boolean") {
    timeout = HTTP_SETTING.TIMEOUT_LONG;
  }
  if (typeof long === "number") {
    timeout = long;
  }
  return timeout;
}

// axios实例创造方法
export function createInstance(
  long: boolean | number = HTTP_SETTING.TIMEOUT_SHORT,
): AxiosInstance {
  // 创建和返回
  const newInstance: AxiosInstance = axios.create({
    timeout: getTimeout(long),
  });
  return newInstance;
}

/**
 * get请求格式化参数
 */
export function setUrlWithParams(
  url: string,
  data: any,
  fresh?: boolean,
): string {
  const timestamps = new Date().getTime();
  let link = url;
  if (data && typeof data === "object" && Object.keys(data).length > 0) {
    const formatData = queryString.stringify(data);
    link = `${url}?${formatData}`;
    if (fresh) {
      link = `${link}&v=${timestamps}`;
    }
    return link;
  }
  if (fresh) {
    link = `${url}?v=${timestamps}`;
  }
  return link;
}
