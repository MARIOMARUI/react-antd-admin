/**
 * @Date 2019-07-24 16:31:29
 * @Remark
 */

// lib
// config
// script & methods & public
import toast from "cts/toast";
// store
// service
import { loginService } from "biz/auth/service";
// interface && type && class
// 其它

export async function userLogin(
  form: {
    username: string;
    password: string;
    code: string;
  },
  setLoading: (val: boolean) => void,
  cb: () => void,
) {
  // 调用服务
  setLoading(true);
  const result = await loginService(form.username, form.password, form.code);
  setLoading(false);
  // 成功
  if (!result.payload) {
    cb();
    return;
  }
  toast.success("登录成功");
}
