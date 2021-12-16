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
  addRoleService,
  delRoleService,
  getRolePageService,
  updateRoleService,
} from "biz/role/service";
import { getMenuListService } from "biz/menu/service";
import { getPermissionListService } from "biz/permission/service";
// interface && type && class
// 其它

export async function getRolePage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getRolePageService({
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

export async function addRole(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addRoleService({
    description: form.description,
    name: form.name,
    sort: 0,
    status: form.status,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getRolePage();
  }
}

export async function updateRole(form: any, id: number) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateRoleService({
    id,
    description: form.description,
    name: form.name,
    sort: 0,
    status: form.status,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getRolePage();
  }
}

export async function delRole(id: number) {
  // 调用服务
  const result = await delRoleService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getRolePage();
  }
}

export async function didMount() {
  // 获得全部菜单和权限
  getMenuListService();
  getPermissionListService();
  //
  getRolePage();
}
