/**
 * @Date 2021-06-09 17:14:09
 * @Remark
 */

// config
import { LOCAL_MENU_OPEN, LOCAL_MENU_SELECTED } from "project/config";
// state
import { makeAutoObservable, toJS } from "mobx";
// script & methods & public
import storageUtils from "utils/storageUtils";
// 其它

class AppState {
  collapsed = false; // 侧边栏折叠
  isFull = false; // 全屏
  open: string[] = []; // 打开的
  selected: string[] = []; // 选中的
  tempSelected: string[] = []; // 临时选中的
  tagGroup: RouteMenu[] = []; // 顶部tag组
  constructor() {
    makeAutoObservable(this);
    // 初始化
    const menuOpen = storageUtils.getStore<string[]>(LOCAL_MENU_OPEN, false);
    this.open = menuOpen || [];

    const menuSelected = storageUtils.getStore<string[]>(
      LOCAL_MENU_SELECTED,
      false,
    );
    this.selected = menuSelected || [];
  }
  collapsedChange() {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.tempSelected = toJS(this.open);
    } else {
      setTimeout(() => {
        this.open = toJS(this.tempSelected);
        storageUtils.setStore(LOCAL_MENU_OPEN, this.getOpen(), false);
      }, 50);
    }
  }
  setFull(val: boolean) {
    this.isFull = val;
  }
  setOpen(val: string[]) {
    if (this.collapsed && val.length > 0) {
      this.tempSelected = val;
    }
    this.open = val;
    if (this.open.length > 0) {
      storageUtils.setStore(LOCAL_MENU_OPEN, this.getOpen(), false);
    }
  }
  addOpen(val: string) {
    const flag = this.open.some((el) => el === val);
    if (flag) return;
    if (this.collapsed) {
      this.tempSelected.push(val);
    } else {
      this.open.push(val);
      storageUtils.setStore(LOCAL_MENU_OPEN, this.getOpen(), false);
    }
  }
  getOpen() {
    return toJS(this.open);
  }
  setSelected(val: string[]) {
    this.selected = val;
    storageUtils.setStore(LOCAL_MENU_SELECTED, this.getSelected(), false);
  }
  getSelected() {
    return toJS(this.selected);
  }
  getTagGroup() {
    return toJS(this.tagGroup);
  }
  addTag(menu: RouteMenu | undefined) {
    if (!menu) return;
    if (this.tagGroup.some((el) => el.code === menu.code)) {
      return;
    }
    this.tagGroup.push(menu);
  }
  delTag(route: RouteMenu) {
    const newList = toJS(this.tagGroup).filter((el) => el.code !== route.code);
    this.tagGroup = newList;
  }
  delTagOther(route?: RouteMenu) {
    if (route) {
      const newList = toJS(this.tagGroup).filter(
        (el) => el.code === route.code || el.code === "main",
      );
      this.tagGroup = newList;
    } else {
      const newList = toJS(this.tagGroup).filter((el) => el.code === "main");
      this.tagGroup = newList;
    }
  }
}

export default AppState;
