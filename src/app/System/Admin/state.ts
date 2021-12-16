/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-10-27 17:51:14
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
// 其它

export interface SearchValue {
  userName?: string;
  mobile?: string;
  accountTypeEnum?: string;
}

class State {
  loading = false;
  list: Admin[] = [];
  total = 0;
  page = PAGE_DEFAULT.BEGIN;
  size = PAGE_DEFAULT.SIZE;
  search: SearchValue = {};
  editModal: Admin | boolean = false;
  editModalLoading = false;
  constructor() {
    makeAutoObservable(this);
  }
  setLoading(val: boolean) {
    this.loading = val;
  }
  setList(list: Admin[]) {
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
  setEditModal(val: Admin | boolean) {
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
  setSearch(val: SearchValue = {}) {
    this.search = val;
  }
  getSearch() {
    return toJS(this.search);
  }
  regionList:Region[] = [];
  setRegionList(v:Region[]) {
    this.regionList = v;
  }
}

export const state = new State();
