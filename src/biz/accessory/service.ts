/**
 * @Date 2021-06-28 11:10:59
 * @Remark
 */

// lib
// config
import { PAGE_DEFAULT } from "config/setting";
// script & methods & public
// http
// state
// service
import {
  simplePageService,
  simpleObjectService,
} from "public/service/simple.service";
// api
import {
  ReqAccessoryPage,
  ResAccessoryPage,
  API_ACCESSORY_PAGE,
  ReqAccessoryAdd,
  API_ACCESSORY_ADD,
  API_ACCESSORY_UPDATE,
  ReqAccessoryUpdate,
  ResAccessory,
  API_ACCESSORY_DETAIL,
  ReqAccessory,
  API_ACCESSORY_DEL,
} from "./api";
// interface && type && class
// 其它

// 分页
export async function getAccessoryPageService(params: ReqAccessoryPage) {
  return simplePageService<ReqAccessoryPage, ResAccessoryPage, Accessory>(
    API_ACCESSORY_PAGE,
    params,
  );
}

// 搜索
export async function searchAccessoryService(name?: string) {
  return simplePageService<ReqAccessoryPage, ResAccessoryPage, Accessory>(
    API_ACCESSORY_PAGE,
    {
      modelName: name,
      pageNum: PAGE_DEFAULT.BEGIN,
      pageSize: PAGE_DEFAULT.SEARCH,
    },
  );
}

// 添加
export async function addAccessoryService(params: ReqAccessoryAdd) {
  return simpleObjectService<ReqAccessoryAdd, ResAccessory, Accessory>(
    API_ACCESSORY_ADD,
    params,
  );
}

// 详情
export async function getAccessoryService(params: string) {
  return simpleObjectService<ReqAccessory, ResAccessory, Accessory>(
    API_ACCESSORY_DETAIL,
    {
      accessoriesManagementId: params,
    },
  );
}

// 编辑
export async function updateAccessoryService(params: ReqAccessoryUpdate) {
  return simpleObjectService<ReqAccessoryUpdate, ResAccessory, Accessory>(
    API_ACCESSORY_UPDATE,
    params,
  );
}

// 删除
export async function delAccessoryService(params: string) {
  return simpleObjectService<ReqAccessory, ResAccessory, Accessory>(
    API_ACCESSORY_DEL,
    {
      accessoriesManagementId: params,
    },
  );
}
