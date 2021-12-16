/**
 * @Date 2021-07-21 16:23:31
 * @Remark
 */

// lib
import { makeAutoObservable, toJS } from "mobx";
// config
// script & methods & public
// controller
// interface && type && class";
// 其它

class StatePermissionModal {
  modal: Role | null = null;
  modalLoading = false;
  // Transfer
  targetKeys: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setModalLoading(val: boolean) {
    this.modalLoading = val;
  }
  setModal(val: Role | null) {
    this.modal = val;
  }
  getModal() {
    return toJS(this.modal);
  }
  setTargetKeys(val: string[]) {
    this.targetKeys = val;
  }
  getTargetKeys() {
    return toJS(this.targetKeys);
  }
}

export const stateRoleModal = new StatePermissionModal();
