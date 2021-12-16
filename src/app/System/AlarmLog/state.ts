/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-12 14:37:10
 * @LastEditTime: 2021-11-12 15:45:55
 */
/**
 * @Date 2021-06-09 17:14:09
 * @Remark
 */

// config
// state
import { makeAutoObservable, toJS } from "mobx";
// controller
// script & methods & public
import { PAGE_DEFAULT } from "config/setting";
import {
  GiveAnAlarmLevelList,
  ProcessingStatusList,
} from "biz/giveAnAlarm/api";
import { AlarmLogPage } from "biz/alarmLog/api";
// 其它

export interface SearchValue {
  level?: string;
  status?: string;
  equipmentNum?: string;
  isDelete: number;
}

class State {
  loading = false;
  list: AlarmLogPage[] = [];
  total = 0;
  page = PAGE_DEFAULT.BEGIN;
  size = PAGE_DEFAULT.SIZE;
  search: SearchValue = { isDelete: 0 };
  editModal: Company | boolean = false;
  editModalLoading = false;
  constructor() {
    makeAutoObservable(this);
  }
  setLoading(val: boolean) {
    this.loading = val;
  }
  setList(list: AlarmLogPage[]) {
    this.list = list;
  }
  getList() {
    return toJS(this.list);
  }
  setTotal(val: number) {
    this.total = val;
  }
  setPage(val = PAGE_DEFAULT.BEGIN) {
    this.page = val;
  }
  setSize(val = PAGE_DEFAULT.SIZE) {
    this.size = val;
  }
  setEditModal(val: Company | boolean) {
    this.editModal = val;
  }
  get editModalShow() {
    return !!this.editModal;
  }
  get editInfo() {
    if (typeof this.editModal !== "boolean") {
      return toJS(this.editModal);
    }
    return null;
  }
  setEditModalLoading(val: boolean) {
    this.editModalLoading = val;
  }
  setSearch(val: SearchValue = { isDelete: 0 }) {
    this.search = val;
  }
  getSearch() {
    return toJS(this.search);
  }
  // ==================
  // 报警处理状态列表
  processingStatusList: ProcessingStatusList[] = [];
  setProcessingStatusList(v: ProcessingStatusList[]) {
    this.processingStatusList = v;
  }
  get getProcessingStatusList() {
    return toJS(this.processingStatusList);
  }
  // 报警等级列表
  giveAnAlarmLevelList: GiveAnAlarmLevelList[] = [];
  setGiveAnAlarmLevelList(v: GiveAnAlarmLevelList[]) {
    this.giveAnAlarmLevelList = v;
  }
  get getGiveAnAlarmLevelList() {
    return toJS(this.giveAnAlarmLevelList);
  }
}

export const state = new State();
