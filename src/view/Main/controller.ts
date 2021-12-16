/**
 * @Date 2020-06-23 16:22:27
 * @Remark
 */

// lib
// config
// script & methods & public
import toast from "cts/toast";
// store
import { state } from "./state";
// service
import { updateUserPwdService, logoutService } from "biz/auth/service";
// interface && type
// 其它

export async function letUserPwd(oldPwd: string, newPwd: string) {
  // 开始前
  state.pwdLoading = true;
  // 调用服务
  const result = await updateUserPwdService(oldPwd, newPwd);
  // 结束后
  state.pwdLoading = false;
  // 成功
  if (result.payload) {
    state.pwdModal = false;
    toast.success("密码修改成功,3秒后退出系统");
    setTimeout(() => {
      logoutService();
    }, 3000);
  }
  // 失败和异常
  toast.whenFailOrErr(result);
}

export async function letUserInfoUpdate() {
  // 调用服务
  // state.infoLoading = true;
  // const result = await letUserInfoUpdateService(name);
  // state.infoLoading = false;
  // // 成功
  // if (result.payload) {
  //   state.infoModal = false;
  // }
  // // 失败和异常
  // toast.whenFailOrErr(result);
}

export async function init() {
  //
}
