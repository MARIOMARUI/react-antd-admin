/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-11 16:54:20
 * @LastEditTime: 2021-11-12 13:46:51
 */
/**
 * @Date 2021-06-21 14:00:12
 * @Remark
 */

// lib

// config
// script & methods & public
// store
import { getDictService } from "biz/dict/service";
import {
  ReqAlarmCombinationListAdd,
  ReqAlarmCombinationListDel,
  ReqGiveAnAlarmLevelListAdd,
  ReqGiveAnAlarmLevelListDel,
  ReqProcessingStatusListAdd,
  ReqProcessingStatusListDel,
  ReqProtectivePlateListAdd,
  ReqProtectivePlateListDel,
} from "biz/giveAnAlarm/api";
import {
  addAlarmCombinationListService,
  addGiveAnAlarmLevelListService,
  addProcessingStatusListService,
  addProtectivePlateListService,
  delAlarmCombinationListService,
  delGiveAnAlarmLevelListService,
  delProcessingStatusListService,
  delProtectivePlateListService,
  getAlarmCombinationListService,
  getGiveAnAlarmLevelListService,
  getProcessingStatusListService,
  getProtectivePlateListService,
} from "biz/giveAnAlarm/service";
import toast from "cts/toast";
import { state } from "./state";
// service
// interface && type && class
// 其它

/** @desc 状态版列表 */
export async function getProtectivePlateListController() {
  // 调用服务
  state.setLoading(true);
  const result = await getProtectivePlateListService();
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setProtectivePlateList(result.payload);
  }
  // 失败和异常
}

/** @desc 状态版列表 */
export async function addProtectivePlateListController(
  params: ReqProtectivePlateListAdd,
) {
  // 调用服务
  state.setLoading(true);
  const result = await addProtectivePlateListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功！");
    getProtectivePlateListController();
  }
  // 失败和异常
}

/** @desc 状态版列表 */
export async function delProtectivePlateListController(
  params: ReqProtectivePlateListDel,
) {
  // 调用服务
  state.setLoading(true);
  const result = await delProtectivePlateListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("删除成功！");
    getProtectivePlateListController();
  }
  // 失败和异常
}
// =================报警组合=========================

/** @desc 报警组合列表 */
export async function getAlarmCombinationListController() {
  // 调用服务
  state.setLoading(true);
  const result = await getAlarmCombinationListService();
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setAlarmCombinationList(result.payload);
  }
  // 失败和异常
}

/** @desc 新增报警组合列表 */
export async function addAlarmCombinationListController(
  params: ReqAlarmCombinationListAdd,
) {
  // 调用服务
  state.setLoading(true);
  const result = await addAlarmCombinationListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功！");
    getAlarmCombinationListController();
  }
  // 失败和异常
}

/** @desc 删除报警组合列表 */
export async function delAlarmCombinationListController(
  params: ReqAlarmCombinationListDel,
) {
  // 调用服务
  state.setLoading(true);
  const result = await delAlarmCombinationListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("删除成功！");
    getAlarmCombinationListController();
  }
  // 失败和异常
}
// =================报警等级=========================
/** @desc 报警等级列表 */
export async function getGiveAnAlarmLevelListController() {
  // 调用服务
  state.setLoading(true);
  const result = await getGiveAnAlarmLevelListService();
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setGiveAnAlarmLevelList(result.payload);
  }
  // 失败和异常
}

/** @desc 新增报警等级列表 */
export async function addGiveAnAlarmLevelListController(
  params: ReqGiveAnAlarmLevelListAdd,
) {
  // 调用服务
  state.setLoading(true);
  const result = await addGiveAnAlarmLevelListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功！");
    getGiveAnAlarmLevelListController();
  }
  // 失败和异常
}

/** @desc 删除报警等级列表 */
export async function delGiveAnAlarmLevelListController(
  params: ReqGiveAnAlarmLevelListDel,
) {
  // 调用服务
  state.setLoading(true);
  const result = await delGiveAnAlarmLevelListService(params);
  state.setLoading(false);
  // 成功
  if (result.payload) {
    toast.success("删除成功！");
    getGiveAnAlarmLevelListController();
  }
  // 失败和异常
}
// =================报警处理状态=========================
/** @desc 报警处理状态列表 */
export async function getProcessingStatusListController() {
  // 调用服务
  state.setLoading2(true);
  const result = await getProcessingStatusListService();
  state.setLoading2(false);
  // 成功
  if (result.payload) {
    state.setProcessingStatusList(result.payload);
  }
  // 失败和异常
}

/** @desc 新增报警处理状态列表 */
export async function addProcessingStatusListController(
  params: ReqProcessingStatusListAdd,
) {
  // 调用服务
  state.setLoading2(true);
  const result = await addProcessingStatusListService(params);
  state.setLoading2(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功！");
    getProcessingStatusListController();
  }
  // 失败和异常
}

/** @desc 删除报警处理状态列表 */
export async function delProcessingStatusListController(
  params: ReqProcessingStatusListDel,
) {
  // 调用服务
  state.setLoading2(true);
  const result = await delProcessingStatusListService(params);
  state.setLoading2(false);
  // 成功
  if (result.payload) {
    toast.success("删除成功！");
    getProcessingStatusListController();
  }
  // 失败和异常
}

export async function didMount() {
  await getDictService();
  getProtectivePlateListController();
  getAlarmCombinationListController();
  getGiveAnAlarmLevelListController();
  getProcessingStatusListController();
}
