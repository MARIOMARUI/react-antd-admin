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
import { dictState } from "state/global";
// service
import {
  addMenuService,
  delMenuService,
  getMenuListService,
  getMenuPageService,
  updateMenuService,
} from "biz/menu/service";
import { getAllMenuListFromRoutes } from "routes/logic";
// interface && type && class
// 其它

export async function getMenuPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getMenuPageService({
    pageNum: state.page,
    pageSize: state.size,
    title: sp.sName || "",
  });
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.total);
    state.setList(result.payload.list);
  }
  // 失败和异常
}

// 目前先支持两级菜单
export async function addMenu(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);

  // 调用服务
  state.setEditModalLoading(true);
  const result = await addMenuService({
    level: form.parentId ? 1 : 0, // 有父id就是1级菜单,不然是0级菜单
    parentId: form.parentId || 0,
    sort: 0,
    title: form.title,
    uri: form.uri,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getMenuPage();
  }
}

export async function updateMenu(form: any, id: number) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateMenuService({
    id,
    level: form.parentId ? 1 : 0, // 有父id就是1级菜单,不然是0级菜单
    parentId: form.parentId || 0,
    sort: 0,
    title: form.title,
    uri: form.uri,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getMenuPage();
  }
}

export async function delMenu(id: number) {
  // 调用服务
  const result = await delMenuService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getMenuPage();
  }
}

// 获得菜单列表
export async function getCanAddMenus(setMenus: (menus: RouteMenu[]) => void) {
  // 调用服务
  await getMenuListService();
  const list = dictState.menus;
  const can = getAllMenuListFromRoutes().filter((el) => {
    const item = list.find((it) => it.uri === el.path);
    return !item;
  });
  setMenus(can);
}

export async function didMount() {
  getMenuPage();
}
