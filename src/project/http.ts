/**
 * @Date 2021-06-10 18:55:55
 * @Remark 授权相关的方法
 */

// lib
import { Modal } from "antd";
// components & widget
import toast from "cts/toast";
import { userState } from "state/global";
// 其它

let hidden = true;
export function actionWhenNotLogin() {
  if (hidden) {
    hidden = false;
    // 授权已经无效就不调用退出接口了
    Modal.error({
      title: "当前用户登录授权已经过期，请重新登录",
      okText: "重新登录",
      onOk() {
        userState.setToken("");
        setTimeout(() => {
          Modal.destroyAll();
          hidden = true;
        }, 200);
      },
    });
    setTimeout(() => {
      Modal.destroyAll();
      hidden = true;
    }, 3000);
  }
}

export function alertWhenFailOrErr(data: BagData<any>) {
  toast.whenFailOrErr(data);
}
