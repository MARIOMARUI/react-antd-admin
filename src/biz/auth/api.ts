/**
 * @Date 2021-06-11 11:29:13
 * @Remark
 */

// API -------------------------------------------------------------

export const API_CODE: Api = {
  title: "验证码",
  path: "login/validateCode",
  method: "GET",
  prefix: "li_dian",
  controller: "login-controller",
};

// API -------------------------------------------------------------

export const API_LOGIN: Api = {
  title: "登录",
  path: "login/login",
  method: "POST",
  prefix: "li_dian",
  controller: "login-controller",
};

// req
export interface ReqLogin {
  loginName: string;
  password: string;
  randCode: string;
}

// res
export interface ResLogin extends Res {
  user: Account;
  authorization: string;
}

// API -------------------------------------------------------------

export const API_LOGOUT: Api = {
  title: "退出登录",
  path: "login/logout",
  method: "GET",
  prefix: "li_dian",
  controller: "login-controller",
};
