/**
 * @Date 2019-11-10 10:12:36
 * @Remark
 */

// state class
import AppState from "./app.state";
import DictState from "./dict.state";
import UserState from "./user.state";
// 其它
import { LOCAL_ACCOUNT, LOCAL_AUTH } from "project/config";
import storageUtils from "utils/storageUtils";

// 创建全局state
export const appState = new AppState();
export const dictState = new DictState();
export const userState = new UserState();

// init
export function initUserState() {
  const account = storageUtils.getStore<Account>(LOCAL_ACCOUNT, true);
  if (account) {
    userState.setAccount(account);
  }
  const auth = storageUtils.getStore<string>(LOCAL_AUTH, true);
  if (auth) {
    userState.token = auth;
  }
}
