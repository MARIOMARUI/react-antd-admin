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
  ReqCompanyPage,
  ResCompanyPage,
  API_COMPANY_PAGE,
  ReqCompanyAdd,
  API_COMPANY_ADD,
  API_COMPANY_UPDATE,
  ReqCompanyUpdate,
  API_COMPANY_DEL,
  ResCompany,
  ReqCompanyId,
} from "./api";
// interface && type && class
// 其它

// 公司分页
export async function getCompanyPageService(params: ReqCompanyPage) {
  return simplePageService<ReqCompanyPage, ResCompanyPage, Company>(
    API_COMPANY_PAGE,
    params,
  );
}

// 公司搜索
export async function searchCompanyService(params?: string) {
  return simplePageService<ReqCompanyPage, ResCompanyPage, Company>(
    API_COMPANY_PAGE,
    {
      pageNum: 1,
      pageSize: 50,
      companyName: params,
    },
  );
}

// 公司添加
export async function addCompanyService(params: ReqCompanyAdd) {
  return simpleObjectService<ReqCompanyAdd, ResCompany, Company>(
    API_COMPANY_ADD,
    params,
  );
}

// 公司编辑
export async function updateCompanyService(params: ReqCompanyUpdate) {
  return simpleObjectService<ReqCompanyUpdate, ResCompany, Company>(
    API_COMPANY_UPDATE,
    params,
  );
}

// 公司删除
export async function delCompanyService(id: string) {
  return simpleBooleanService<ReqCompanyId, ResBoolean>(API_COMPANY_DEL, {
    companyId: id,
  });
}
