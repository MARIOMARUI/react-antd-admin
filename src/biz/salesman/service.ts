import { simpleListService } from "public/service/simple.service";
import {
  API_ALL_SALESMAN_LIST,
  API_CURRENT_SALESMAN_LIST,
  ReqSalesmanList,
  ResSalesmanList,
} from "./api";

/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 17:55:22
 * @LastEditTime: 2021-09-02 18:38:38
 */
/* 获取全部业务员列表 */
export async function getAllSalesmanListService(userName: string | undefined) {
  return simpleListService<ReqSalesmanList, ResSalesmanList, Salesman>(
    API_ALL_SALESMAN_LIST,
    { userName: userName || "" },
  );
}
/* 获取当前帐号可操作业务员列表 */
export async function getCurrentUserSalesmanListService(userName:string | undefined) {
  return simpleListService<ReqSalesmanList, ResSalesmanList, Salesman>(
    API_CURRENT_SALESMAN_LIST,
    { userName: userName || "" },
  );
}
