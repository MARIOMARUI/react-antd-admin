/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 17:55:14
 * @LastEditTime: 2021-09-02 18:20:10
 */
export const API_ALL_SALESMAN_LIST: Api = {
    title: "获取全部业务员列表",
    path: "admin_user/owned_salesman_list_all",
    method: "GET",
    prefix: "li_dian",
    remark: "admin-user-controller",
  };

  // req
  export interface ReqSalesmanList {
    userName?: string;
  }

  // res
  export type ResSalesmanList = ResList<Salesman>;

  export const API_CURRENT_SALESMAN_LIST: Api = {
    title: "获取当前帐号可操作业务员列表",
    path: "admin_user/owned_salesman_list_oneself",
    method: "GET",
    prefix: "li_dian",
    remark: "admin-user-controller",
  };
