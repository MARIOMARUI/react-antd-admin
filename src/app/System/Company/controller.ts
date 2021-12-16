/**
 * @Date 2021-06-21 14:00:07
 * @Remark
 */

// lib
// config
import { MODULE_NAME } from "./config";
// script & methods & public
import logUtils from "utils/logUtils";
import toast from "cts/toast";
// store
import { state } from "./state";
// service
import {
  addCompanyService,
  delCompanyService,
  getCompanyPageService,
  updateCompanyService,
} from "biz/company/service";
import { getAreaDataService } from "biz/area/service";
import { searchRegionService } from "biz/region/service";
// interface && type && class
// 其它

export async function getCompanyPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getCompanyPageService({
    pageNum: state.page,
    pageSize: state.size,
    companyName: sp.sName,
  });
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.total);
    state.setList(result.payload.list);
  }
  // 失败和异常
}

export async function addCompany(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addCompanyService({
    address: form.address,
    companyName: form.companyName,
    province: form.area[0],
    city: form.area[1],
    district: form.area[2],
    remark: form.remark,
    regionId: form.regionId,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getCompanyPage();
  }
}

export async function updateCompany(form: any, id: string) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateCompanyService({
    companyId: id,
    address: form.address,
    companyName: form.companyName,
    province: form.area[0],
    city: form.area[1],
    district: form.area[2],
    remark: form.remark,
    regionId: form.regionId,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getCompanyPage();
  }
}

export async function delCompany(id: string) {
  // 调用服务
  const result = await delCompanyService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getCompanyPage();
  }
}
// 获取区域
export async function getRegionList() {
  const result = await searchRegionService();
  if (result.payload) {
    state.setRegionList(result.payload.list);
  }
}

export async function didMount() {
  await getAreaDataService();
  getRegionList();
  getCompanyPage();
}
