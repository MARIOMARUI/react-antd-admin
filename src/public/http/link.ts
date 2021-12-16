/**
 * @Date 2021-06-09 18:57:16
 * @Remark block1
 */

// axios
import { AxiosError, AxiosResponse } from "axios";
import { userState } from "state/global";
// config & script & public
import logUtils from "utils/logUtils";
// import { getToken } from "@public/logic/token";
// http
import { setUrlWithParams, createInstance, getTimeout } from "./core";
// model
import { BLANK_RESPONSE, OpenOption } from "./model";
// 其它

const axiosInstance = createInstance();

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    const token = userState.getToken();
    const mConfig = config;
    if (token !== "") {
      mConfig.headers = {
        authorization: token,
      };
    }
    return mConfig;
  },
  (error) => Promise.reject(error),
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error),
);

export function successAction<D extends Res>(
  res: AxiosResponse<D>,
  url: string,
) {
  // 打印结果
  logUtils.info("res", `url: ${url}`);
  logUtils.log(JSON.parse(JSON.stringify(res.data)));
  return res.data;
}

export function errorAction(error: AxiosError, url: string) {
  const res: AxiosResponse<null> = error.response || BLANK_RESPONSE;
  // 打印结果
  logUtils.info("res", `url: ${url}`);
  logUtils.log(res.data);
  const result: Res = {
    result: res.status,
    message: "http通信异常",
  };
  return result;
}

/**
 * get方法
 * @param url
 * @param payload
 * @param option
 */
function get<T, D extends Res>(
  url: string,
  payload: T,
  option: OpenOption,
): Promise<D | Res> {
  axiosInstance.defaults.timeout = getTimeout(option.long);
  // 请求路径处理参数
  const mUrl = setUrlWithParams(url, payload, option.fresh);

  // 请求实例
  return axiosInstance
    .get(mUrl)
    .then((res: AxiosResponse<D>) => successAction(res, url))
    .catch((error: AxiosError) => errorAction(error, url));
}

/**
 * POST方法
 * @param url
 * @param payload
 * @param option
 */
function post<T, D extends Res>(
  url: string,
  payload: T,
  option: OpenOption,
): Promise<D | Res> {
  axiosInstance.defaults.timeout = getTimeout(option.long);
  let mUrl = url;
  // 添加附加参数
  if (option.postQuery) {
    mUrl = setUrlWithParams(url, option.postQuery, option.fresh);
  }

  // 请求实例
  return axiosInstance
    .post(mUrl, payload)
    .then((res: AxiosResponse<D>) => successAction(res, url))
    .catch((error: AxiosError) => errorAction(error, url));
}

export default {
  get,
  post,
};
