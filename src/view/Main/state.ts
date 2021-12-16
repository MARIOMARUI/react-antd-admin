/**
 * @Date 2021-06-11 13:53:40
 * @Remark
 */

import { makeAutoObservable } from "mobx";

class State {
  // state
  pwdModal = false; // 修改密码
  pwdLoading = false;
  infoModal = false; // 修改个人信息
  infoLoading = false;
  //
  constructor() {
    makeAutoObservable(this);
  }
}

export const state = new State();
