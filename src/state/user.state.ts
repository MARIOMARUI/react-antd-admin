/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-10-27 18:10:34
 */
/**
 * @Date 2021-06-09 17:14:09
 * @Remark
 */

// config
import { LOCAL_ACCOUNT, LOCAL_AUTH } from "project/config";
// state
import { makeAutoObservable, toJS } from "mobx";
// script & methods & public
import storageUtils from "utils/storageUtils";
// 其它

class UserState {
  account: Account = {
    accountTypeEnum: "",
    accountTypeEnums: "",
    avatarUrl: "",
    companyId: undefined,
    companyName: undefined,
    departmentOccupationEnum: undefined,
    deptId: undefined,
    deptName: undefined,
    founderId: undefined,
    gender: 0,
    gmtCreate: "",
    id: "",
    loginName: "",
    mobile: "",
    status: 0,
    toConfigurePeople: undefined,
    userId: "",
    userName: "",
    menuList: [],
    permissionList: [],
    regionId: "",
  };
  token = "";
  constructor() {
    makeAutoObservable(this);
  }
  setAccount(data: Partial<Account>) {
    const old = this.getAccount();
    this.account = {
      ...old,
      ...data,
    };
    storageUtils.setStore(LOCAL_ACCOUNT, this.getAccount(), true);
  }
  getAccount() {
    return toJS(this.account);
  }
  getPermissions() {
    return toJS(this.account.permissionList.map((el) => el.value));
  }
  setToken(val: string) {
    this.token = val;
    storageUtils.setStore(LOCAL_AUTH, val, true);
  }
  getToken() {
    return toJS(this.token);
  }
  isLogin() {
    return this.token !== "";
  }
}

export default UserState;
