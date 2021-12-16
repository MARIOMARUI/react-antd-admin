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
  addPermissionService,
  delPermissionService,
  getPermissionPageService,
  updatePermissionService,
} from "biz/permission/service";
// interface && type && class
// 其它

export async function getPermissionPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getPermissionPageService({
    pageNum: state.page,
    pageSize: state.size,
    name: sp.sName || "",
  });
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.total);
    state.setList(result.payload.list);
  }
  // 失败和异常
}

export async function addPermission(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addPermissionService({
    menuId: 0,
    name: form.name,
    sort: 0,
    status: form.status,
    uri: form.uri,
    value: form.code.toUpperCase(),
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getPermissionPage();
  }
}

export async function updatePermission(form: any, id: number) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updatePermissionService({
    id,
    menuId: 0,
    name: form.name,
    sort: 0,
    status: form.status,
    uri: form.uri,
    value: form.code.toUpperCase(),
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getPermissionPage();
  }
}

export async function delPermission(id: number) {
  // 调用服务
  const result = await delPermissionService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getPermissionPage();
  }
}

export async function didMount() {
  getPermissionPage();
}
