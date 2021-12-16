/**
 * @Date 2019-11-27 17:11:36
 * @Remark block2
 */

// lib
import { actionWhenNotLogin, alertWhenFailOrErr } from "project/http";
// config
import { HTTP_SETTING } from "config/setting";
// script & methods & public
// store
// http
import { createApiUrl, show } from "./core";
import link from "./link";
import { OpenOption, openOption } from "./model";
// interface && type
// 其它

// 成功返回
export function isOkRes<T extends Res>(test: T | Res): test is T {
  const code = test.result.toString();
  return code === HTTP_SETTING.RES_SUCCESS_CODE.toString();
}

// 失败返回
export function isFailRes<T extends Res>(test: T | Res): test is Res {
  const code = test.result.toString();
  return code !== HTTP_SETTING.RES_SUCCESS_CODE.toString() && code.length !== 3;
}

// 错误返回
export function isErrRes<T extends Res>(test: T | Res): test is Res {
  const code = test.result.toString();
  return code !== HTTP_SETTING.RES_SUCCESS_CODE.toString() && code.length === 3;
}

/**
 * 打开接口
 */

// 单个使用
// const a1 = await open<{}, ResOrderList>(apiOrderList, {});

// 串联使用
// const req1 = open<{}, ResOrderList>(apiOrderList, {});
// const req2 = open<{}, ResOrderList>(apiOrderList, {});
// const a1 = await req1;
// const a2 = await req2;
export function open<T, D extends Res>(
  api: Api,
  payload: T,
  option: OpenOption = openOption,
) {
  // 设置url
  const url = createApiUrl(api);
  // 打印请求信息
  show(api, url, payload);
  // 根据api信息确定请求格式
  if (api.method === "POST") {
    return link.post<T, D>(url, payload, option);
  }
  // if (api.method === "UPLOAD") {
  //   return link.upload<T, D>(url, payload, option);
  // }
  // 默认用get方式
  return link.get<T, D>(url, payload, option);
}

/**
 * 创建一个Data的结构
 */
export function bag<T>(res: Res | Res[], alert = true): BagData<T> {
  const data: BagData<T> = {
    fail: [],
    err: [],
    payload: null,
  };
  let resArr: Res[] = [];
  if (Array.isArray(res)) {
    resArr = res;
  } else {
    resArr = [res];
  }
  resArr.forEach((el: Res) => {
    // 没有登录
    if (el.result === HTTP_SETTING.RES_NOT_LOGIN_CODE) {
      actionWhenNotLogin();
    } else {
      // 错误返回
      if (isErrRes(el)) {
        data.err.push(el);
      }
      // 失败返回
      if (isFailRes(el)) {
        data.fail.push(el);
      }
    }
  });
  if (alert) {
    alertWhenFailOrErr(data);
  }
  // 返回
  return data;
}

export default {
  open,
  bag,
  isOkRes,
  isFailRes,
  isErrRes,
};
