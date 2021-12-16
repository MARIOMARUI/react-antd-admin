/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-11 16:54:37
 * @LastEditTime: 2021-11-12 11:01:27
 */
/**
 * @Date 2021-06-09 17:14:09
 * @Remark
 */

// config
// state
import {
  AlarmCombinationList,
  GiveAnAlarmLevelList,
  ProcessingStatusList,
  ProtectivePlateList,
} from "biz/giveAnAlarm/api";
import { makeAutoObservable, toJS } from "mobx";
// controller
// script & methods & public
// 其它

export interface SearchValue {}

class State {
  loading = false;
  loading2 = false;
  // 保护板列表
  protectivePlateList: ProtectivePlateList[] = [];
  // 报警组合列表
  alarmCombinationList: AlarmCombinationList[] = [];
  // 严重等级列表
  severityLevelList: ProtectivePlateList[] = [];
  // 报警等级列表
  giveAnAlarmLevelList: GiveAnAlarmLevelList[] = [];
  // 报警处理状态列表
  processingStatusList: ProcessingStatusList[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setLoading(val: boolean) {
    this.loading = val;
  }
  setLoading2(val: boolean) {
    this.loading2 = val;
  }
  setProtectivePlateList(v: ProtectivePlateList[]) {
    this.protectivePlateList = v;
  }
  get getProtectivePlateList() {
    return toJS(this.protectivePlateList);
  }
  setAlarmCombinationList(v: AlarmCombinationList[]) {
    this.alarmCombinationList = v;
  }
  get getAlarmCombinationList() {
    return toJS(this.alarmCombinationList);
  }
  setSeverityLevelList(v: ProtectivePlateList[]) {
    this.severityLevelList = v;
  }
  get getSeverityLevelList() {
    return toJS(this.severityLevelList);
  }
  setGiveAnAlarmLevelList(v: GiveAnAlarmLevelList[]) {
    this.giveAnAlarmLevelList = v;
  }
  get getGiveAnAlarmLevelList() {
    return toJS(this.giveAnAlarmLevelList);
  }
  setProcessingStatusList(v: ProcessingStatusList[]) {
    this.processingStatusList = v;
  }
  get getProcessingStatusList() {
    return toJS(this.processingStatusList);
  }
}

export const state = new State();
