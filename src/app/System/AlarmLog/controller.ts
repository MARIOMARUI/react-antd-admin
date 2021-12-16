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
  updateCompanyService,
} from "biz/company/service";
import { getDictService } from "biz/dict/service";
import { getGiveAnAlarmLevelListService, getProcessingStatusListService } from "biz/giveAnAlarm/service";
import { getAlarmLogPageService } from "biz/alarmLog/service";
// interface && type && class
// 其它

export async function getAlarmLogPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getAlarmLogPageService({
    pageNum: state.page,
    pageSize: state.size,
    equipmentNum: sp.equipmentNum,
    status: sp.status,
    level: sp.level,
    isDelete: sp.isDelete,
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
    getAlarmLogPage();
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
    getAlarmLogPage();
  }
}

export async function delCompany(id: string) {
  // 调用服务
  const result = await delCompanyService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getAlarmLogPage();
  }
}

/** @desc 报警处理状态列表 */
export async function getProcessingStatusListController() {
  // 调用服务
  const result = await getProcessingStatusListService();
  // 成功
  if (result.payload) {
    state.setProcessingStatusList(result.payload);
  }
  // 失败和异常
}

/** @desc 报警等级列表 */
export async function getGiveAnAlarmLevelListController() {
  // 调用服务
  const result = await getGiveAnAlarmLevelListService();
  // 成功
  if (result.payload) {
    state.setGiveAnAlarmLevelList(result.payload);
  }
  // 失败和异常
}

export async function didMount() {
  await getDictService();
  getGiveAnAlarmLevelListController();
  getProcessingStatusListController();
  getAlarmLogPage();
}
