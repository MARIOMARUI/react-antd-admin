/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-11 18:02:35
 * @LastEditTime: 2021-11-12 11:28:28
 */
/**
 * @Date 2021-06-28 11:10:59
 * @Remark
 */

// lib
// config
// script & methods & public
// http
// state
// service
import {
  simpleListService,
  simpleBooleanService,
} from "public/service/simple.service";
// api
import {
  ReqProtectivePlateListDel,
  API_PROTECTIVEPLATE_LIST,
  ResProtectivePlateList,
  ReqProtectivePlateListAdd,
  ProtectivePlateList,
  API_PROTECTIVEPLATE_LIST_ADD,
  API_PROTECTIVEPLATE_LIST_DEL,
  ResAlarmCombinationList,
  AlarmCombinationList,
  API_ALARMCOMBINATION_LIST,
  ReqAlarmCombinationListDel,
  ReqAlarmCombinationListAdd,
  ReqProcessingStatusListDel,
  API_PROCESSINGSTATUS_LIST_DEL,
  API_PROCESSINGSTATUS_LIST_ADD,
  ReqProcessingStatusListAdd,
  API_PROCESSINGSTATUS_LIST,
  ProcessingStatusList,
  ResProcessingStatusList,
  API_GIVEANALARMLEVEL_LIST_DEL,
  ReqGiveAnAlarmLevelListDel,
  API_GIVEANALARMLEVEL_LIST_ADD,
  ReqGiveAnAlarmLevelListAdd,
  API_GIVEANALARMLEVEL_LIST,
  ResGiveAnAlarmLevelList,
  GiveAnAlarmLevelList,
  API_ALARMCOMBINATION_LIST_ADD,
  API_ALARMCOMBINATION_LIST_DEL,
} from "./api";
// interface && type && class
// 其它

// ==================保护板=======================

// 保护板列表
export async function getProtectivePlateListService() {
  return simpleListService<{}, ResProtectivePlateList, ProtectivePlateList>(
    API_PROTECTIVEPLATE_LIST,
    {},
  );
}

// 添加保护板
export async function addProtectivePlateListService(
  params: ReqProtectivePlateListAdd,
) {
  return simpleBooleanService<ReqProtectivePlateListAdd, ResBoolean>(
    API_PROTECTIVEPLATE_LIST_ADD,
    params,
  );
}

// 删除保护板
export async function delProtectivePlateListService(
  params: ReqProtectivePlateListDel,
) {
  return simpleBooleanService<ReqProtectivePlateListDel, ResBoolean>(
    API_PROTECTIVEPLATE_LIST_DEL,
    params,
  );
}

// ==================报警组合=======================
// 报警组合列表
export async function getAlarmCombinationListService() {
  return simpleListService<{}, ResAlarmCombinationList, AlarmCombinationList>(
    API_ALARMCOMBINATION_LIST,
    {},
  );
}
// 添加报警组合
export async function addAlarmCombinationListService(
  params: ReqAlarmCombinationListAdd,
) {
  return simpleBooleanService<ReqAlarmCombinationListAdd, ResBoolean>(
    API_ALARMCOMBINATION_LIST_ADD,
    params,
  );
}

// 删除报警组合
export async function delAlarmCombinationListService(
  params: ReqAlarmCombinationListDel,
) {
  return simpleBooleanService<ReqAlarmCombinationListDel, ResBoolean>(
    API_ALARMCOMBINATION_LIST_DEL,
    params,
  );
}

// ==================报警等级=======================
// 报警等级列表
export async function getGiveAnAlarmLevelListService() {
  return simpleListService<{}, ResGiveAnAlarmLevelList, GiveAnAlarmLevelList>(
    API_GIVEANALARMLEVEL_LIST,
    {},
  );
}
// 添加报警等级
export async function addGiveAnAlarmLevelListService(
  params: ReqGiveAnAlarmLevelListAdd,
) {
  return simpleBooleanService<ReqGiveAnAlarmLevelListAdd, ResBoolean>(
    API_GIVEANALARMLEVEL_LIST_ADD,
    params,
  );
}

// 删除报警等级
export async function delGiveAnAlarmLevelListService(
  params: ReqGiveAnAlarmLevelListDel,
) {
  return simpleBooleanService<ReqGiveAnAlarmLevelListDel, ResBoolean>(
    API_GIVEANALARMLEVEL_LIST_DEL,
    params,
  );
}

// ==================报警处理状态=======================
// 报警处理状态列表
export async function getProcessingStatusListService() {
  return simpleListService<{}, ResProcessingStatusList, ProcessingStatusList>(
    API_PROCESSINGSTATUS_LIST,
    {},
  );
}
// 添加报警处理状态
export async function addProcessingStatusListService(
  params: ReqProcessingStatusListAdd,
) {
  return simpleBooleanService<ReqProcessingStatusListAdd, ResBoolean>(
    API_PROCESSINGSTATUS_LIST_ADD,
    params,
  );
}

// 删除报警处理状态
export async function delProcessingStatusListService(
  params: ReqProcessingStatusListDel,
) {
  return simpleBooleanService<ReqProcessingStatusListDel, ResBoolean>(
    API_PROCESSINGSTATUS_LIST_DEL,
    params,
  );
}
