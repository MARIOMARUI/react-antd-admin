/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-27 16:15:58
 * @LastEditTime: 2021-10-27 16:45:18
 */
/**
 * @Date 2021-07-21 09:42:02
 * @Remark
 */

// lib
// import _ from "lodash";
// config
// script & methods & public
// http
// service
import {
  simplePageService,
  simpleObjectService,
  simpleBooleanService,
} from "public/service/simple.service";
// api
import {
  ReqRegionPage,
  ResRegionPage,
  API_REGION_PAGE,
  ReqRegionAdd,
  API_REGION_ADD,
  API_REGION_UPDATE,
  ReqRegionUpdate,
  API_REGION_DEL,
  ResRegion,
  ReqRegionId,
} from "./api";
// interface && type && class
// 其它

// 区域分页
export async function getRegionPageService(params: ReqRegionPage) {
  return simplePageService<ReqRegionPage, ResRegionPage, Region>(
    API_REGION_PAGE,
    params,
  );
}

// 区域搜索
export async function searchRegionService(params?: string) {
  return simplePageService<ReqRegionPage, ResRegionPage, Region>(
    API_REGION_PAGE,
    {
      pageNum: 1,
      pageSize: 50,
      regionName: params,
    },
  );
}

// 区域添加
export async function addRegionService(params: ReqRegionAdd) {
  return simpleObjectService<ReqRegionAdd, ResRegion, Region>(
    API_REGION_ADD,
    params,
  );
}

// 区域编辑
export async function updateRegionService(params: ReqRegionUpdate) {
  return simpleObjectService<ReqRegionUpdate, ResRegion, Region>(
    API_REGION_UPDATE,
    params,
  );
}

// 区域删除
export async function delRegionService(id: string) {
  return simpleBooleanService<ReqRegionId, ResBoolean>(API_REGION_DEL, {
    regionId: id,
  });
}
