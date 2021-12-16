/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-27 16:13:15
 * @LastEditTime: 2021-10-27 16:45:00
 */
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
  addRegionService,
  delRegionService,
  getRegionPageService,
  updateRegionService,
} from "biz/region/service";
import { getAreaDataService } from "biz/area/service";
// interface && type && class
// 其它

export async function getRegionPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getRegionPageService({
    pageNum: state.page,
    pageSize: state.size,
    regionName: sp.sName,
  });
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.total);
    state.setList(result.payload.list);
  }
  // 失败和异常
}

export async function addRegion(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addRegionService({
    regionName: form.regionName,
    remark: form.remark,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getRegionPage();
  }
}

export async function updateRegion(form: any, id: string) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateRegionService({
    regionId: id,
    regionName: form.regionName,
    remark: form.remark,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getRegionPage();
  }
}

export async function delRegion(id: string) {
  // 调用服务
  const result = await delRegionService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getRegionPage();
  }
}

export async function didMount() {
  await getAreaDataService();
  getRegionPage();
}
