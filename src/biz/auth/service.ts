/**
 * @Date 2021-06-09 14:28:47
 * @Remark
 */

// lib
// config
// script & methods & public
import logUtils from "utils/logUtils";
// state
import { userState } from "state/global";
// http
import { open, bag, isOkRes } from "public/http/api";
import { createApiUrl, setUrlWithParams } from "public/http/core";
// service
import { simpleService } from "public/service/simple.service";
// api
import { API_CODE, API_LOGIN, API_LOGOUT, ReqLogin, ResLogin } from "./api";
// interface && type && class
// 其它

// 获取图形验证码
export function getCodeService() {
  const path = setUrlWithParams(createApiUrl(API_CODE), {}, true);
  logUtils.info("验证码链接", path);
  // 返回
  return path;
}

// 登录
export async function loginService(
  username: string,
  key: string,
  code: string,
) {
  // 打开接口
  const a1 = await open<ReqLogin, ResLogin>(API_LOGIN, {
    loginName: username.trim(),
    password: key.trim(),
    randCode: code.trim(),
  });
  // 创建返回数据
  const data = bag<boolean>(a1);
  // 成功后处理
  if (isOkRes(a1)) {
    userState.setAccount(a1.user);
    userState.setToken(a1.authorization);

    data.payload = true;
  }
  return data;
}

export async function logoutService() {
  const result = await simpleService<{}, ResLogin, string>(API_LOGOUT, {});
  if (result.payload) {
    userState.setToken("");
  }
  return result;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function updateUserPwdService(oldPwd: string, newPwd: string) {
  const result = simpleService<{}, ResLogin, string>(API_LOGIN, {});
  return result;
}
