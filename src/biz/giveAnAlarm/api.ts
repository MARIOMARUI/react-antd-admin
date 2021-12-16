/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-11 18:02:35
 * @LastEditTime: 2021-11-12 14:46:18
 */
/**
 * @Date 2021-06-18 14:40:38
 * @Remark
 */

// API -------------------------------------------------------------

export const API_PROTECTIVEPLATE_LIST: Api = {
  title: "保护板列表",
  path: "protection_board_status/list",
  method: "POST",
  prefix: "li_dian",
  remark: "保护板",
};

export interface ProtectivePlateList {
  protectionBoardStatusId: string;
  statusCode: string;
  statusValue: string;
  id: string;
}

export type ResProtectivePlateList = ResList<ProtectivePlateList>;
// API -------------------------------------------------------------

export const API_PROTECTIVEPLATE_LIST_ADD: Api = {
  title: "保护板添加",
  path: "protection_board_status/add",
  method: "POST",
  prefix: "li_dian",
  remark: "保护板",
};

// req
export interface ReqProtectivePlateListAdd {
  statusCode: string;
  statusValue: string;
}

// API -------------------------------------------------------------

export const API_PROTECTIVEPLATE_LIST_DEL: Api = {
  title: "删除保护板",
  path: "protection_board_status/del",
  method: "POST",
  prefix: "li_dian",
  remark: "保护板",
};
export interface ReqProtectivePlateListDel {
  protectionBoardStatusId: string;
}
// API -------------------------------------------------------------

export const API_ALARMCOMBINATION_LIST: Api = {
  title: "报警组合列表",
  path: "alarm_combination_status/list",
  method: "POST",
  prefix: "li_dian",
  remark: "报警组合",
};

export interface AlarmCombinationList {
  alarmCombinationStatusId: string;
}

export type ResAlarmCombinationList = ResList<AlarmCombinationList>;
// API -------------------------------------------------------------

export const API_ALARMCOMBINATION_LIST_ADD: Api = {
  title: "报警组合添加",
  path: "alarm_combination_status/add",
  method: "POST",
  prefix: "li_dian",
  remark: "报警组合",
};

// req
export interface ReqAlarmCombinationListAdd {
  statusCode: string;
  statusValue: string;
}

// API -------------------------------------------------------------

export const API_ALARMCOMBINATION_LIST_DEL: Api = {
  title: "删除报警组合",
  path: "alarm_combination_status/del",
  method: "POST",
  prefix: "li_dian",
  remark: "报警组合",
};
export interface ReqAlarmCombinationListDel {
  alarmCombinationStatusId: string;
}
// API -------------------------------------------------------------

export const API_GIVEANALARMLEVEL_LIST: Api = {
  title: "报警等级列表",
  path: "alarm_level/list",
  method: "POST",
  prefix: "li_dian",
  remark: "报警等级",
};

export interface GiveAnAlarmLevelList {
  id: string;
  gmtCreate: string;
  gmtModified: string;
  alarmLevelId: string;
  name: string;
  description: string;
}

export type ResGiveAnAlarmLevelList = ResList<GiveAnAlarmLevelList>;
// API -------------------------------------------------------------

export const API_GIVEANALARMLEVEL_LIST_ADD: Api = {
  title: "报警等级添加",
  path: "alarm_level/add",
  method: "POST",
  prefix: "li_dian",
  remark: "报警等级",
};

// req
export interface ReqGiveAnAlarmLevelListAdd {
  statusCode: string;
  statusValue: string;
}

// API -------------------------------------------------------------

export const API_GIVEANALARMLEVEL_LIST_DEL: Api = {
  title: "删除报警等级",
  path: "alarm_level/del",
  method: "POST",
  prefix: "li_dian",
  remark: "报警等级",
};
export interface ReqGiveAnAlarmLevelListDel {
  alarmLevelId: string;
}

// API -------------------------------------------------------------
export const API_PROCESSINGSTATUS_LIST: Api = {
  title: "报警处理状态列表",
  path: "alarm_processing_status/list",
  method: "POST",
  prefix: "li_dian",
  remark: "报警处理状态",
};

export interface ProcessingStatusList {
  id: string;
  gmtCreate: string;
  gmtModified: string;
  alarmProcessingStatusId: string;
  name: string;
  description: string;
}

export type ResProcessingStatusList = ResList<ProcessingStatusList>;
// API -------------------------------------------------------------

export const API_PROCESSINGSTATUS_LIST_ADD: Api = {
  title: "报警处理状态添加",
  path: "alarm_processing_status/add",
  method: "POST",
  prefix: "li_dian",
  remark: "报警处理状态",
};

// req
export interface ReqProcessingStatusListAdd {
  statusCode: string;
  statusValue: string;
}

// API -------------------------------------------------------------

export const API_PROCESSINGSTATUS_LIST_DEL: Api = {
  title: "删除报警处理状态",
  path: "alarm_processing_status/del",
  method: "POST",
  prefix: "li_dian",
  remark: "报警处理状态",
};
export interface ReqProcessingStatusListDel {
  alarmProcessingStatusId: string;
}
