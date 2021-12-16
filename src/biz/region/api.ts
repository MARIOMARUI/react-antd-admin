/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-27 16:15:58
 * @LastEditTime: 2021-10-27 16:31:32
 */
/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export interface ReqRegionId {
  regionId: string;
}

export type ResRegion = ResObject<Region>;

// API -------------------------------------------------------------

export const API_REGION_PAGE: Api = {
  title: "区域分页",
  path: "region/list",
  method: "POST",
  prefix: "li_dian",
  remark: "区域管理",
};

// req
export interface ReqRegionPage extends ReqPage {
  regionName?: string;
}

// res
export type ResRegionPage = ResPage<Region>;

// API -------------------------------------------------------------

export const API_REGION_ADD: Api = {
  title: "添加区域",
  path: "region/add",
  method: "POST",
  prefix: "li_dian",
  remark: "区域管理",
};

// req
export interface ReqRegionAdd {
  regionName: string; // 区域名称
  remark: string;
}

// res
// ResRegion

// API -------------------------------------------------------------

export const API_REGION_UPDATE: Api = {
  title: "编辑区域",
  path: "region/update",
  method: "POST",
  prefix: "li_dian",
  remark: "区域管理",
};

// req
export interface ReqRegionUpdate extends ReqRegionAdd, ReqRegionId {}

// res
// ResRegion

// API -------------------------------------------------------------

export const API_REGION_DEL: Api = {
  title: "删除区域",
  path: "region/delete",
  method: "POST",
  prefix: "li_dian",
  remark: "区域管理",
};
