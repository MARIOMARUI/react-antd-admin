/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-10 18:18:57
 * @LastEditTime: 2021-10-27 17:00:01
 */
/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export interface ReqCompanyId {
  companyId: string;
}

export type ResCompany = ResObject<Company>;

// API -------------------------------------------------------------

export const API_COMPANY_PAGE: Api = {
  title: "公司分页",
  path: "company/list",
  method: "POST",
  prefix: "li_dian",
  remark: "公司管理",
};

// req
export interface ReqCompanyPage extends ReqPage {
  companyName?: string;
}

// res
export type ResCompanyPage = ResPage<Company>;

// API -------------------------------------------------------------

export const API_COMPANY_ADD: Api = {
  title: "添加公司",
  path: "company/add",
  method: "POST",
  prefix: "li_dian",
  remark: "公司管理",
};

// req
export interface ReqCompanyAdd {
  address: string; // 详细地址
  city: string;
  companyName: string; // 公司名称
  district: string;
  province: string;
  remark: string;
  regionId: string;
}

// res
// ResCompany

// API -------------------------------------------------------------

export const API_COMPANY_UPDATE: Api = {
  title: "编辑公司",
  path: "company/update",
  method: "POST",
  prefix: "li_dian",
  remark: "公司管理",
};

// req
export interface ReqCompanyUpdate extends ReqCompanyAdd, ReqCompanyId {}

// res
// ResCompany

// API -------------------------------------------------------------

export const API_COMPANY_DEL: Api = {
  title: "删除公司",
  path: "company/delete",
  method: "POST",
  prefix: "li_dian",
  remark: "公司管理",
};

// API -------------------------------------------------------------

export const API_COMPANY_DETAIL: Api = {
  title: "公司详情",
  path: "company/get",
  method: "POST",
  prefix: "li_dian",
  remark: "公司管理",
};
