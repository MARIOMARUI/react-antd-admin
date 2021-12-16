/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 17:42:39
 * @LastEditTime: 2021-09-17 17:41:45
 */

// API -------------------------------------------------------------

export const API_ASSIGN_ACCOUNT_LIST: Api = {
  title: "获取经销商可关联帐号",
  path: "admin_user/dealers_can_assign_accounts",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqAssignAccount {
  userName: string;
}

// res
export type ResAssignAccount = ResList<AdminDto>;
