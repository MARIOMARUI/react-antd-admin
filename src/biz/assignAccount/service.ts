/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 17:43:14
 * @LastEditTime: 2021-09-17 17:41:52
 */

import { simpleListService } from "public/service/simple.service";
import {
  API_ASSIGN_ACCOUNT_LIST,
  ReqAssignAccount,
  ResAssignAccount,
} from "./api";

// 经销商 可关联账号查询
export async function assignAccountService(params?: string) {
  return simpleListService<ReqAssignAccount, ResAssignAccount, AdminDto>(
    API_ASSIGN_ACCOUNT_LIST,
    {
      userName: params || "",
    },
  );
}
