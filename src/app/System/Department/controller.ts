/**
 * @Date 2021-06-21 14:00:12
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
  addDepartmentService,
  delDepartmentService,
  getDepartmentListService,
  updateDepartmentService,
} from "biz/department/service";
// interface && type && class
// 其它

export async function getDepartmentList() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getDepartmentListService();
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.length);
    state.setList(result.payload);
  }
  // 失败和异常
}

export async function addDepartment(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addDepartmentService({
    departmentPhone: form.departmentPhone,
    deptName: form.deptName,
    deptPId: form.department,
    personInChargeUserId: form.admin,
    remark: form.remark,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getDepartmentList();
  }
}

export async function updateDepartment(form: any, id: string) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateDepartmentService({
    deptId: id,
    departmentPhone: form.departmentPhone,
    deptName: form.deptName,
    deptPId: form.department,
    personInChargeUserId: form.admin,
    remark: form.remark,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getDepartmentList();
  }
}

export async function delDepartment(id: string) {
  // 调用服务
  const result = await delDepartmentService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getDepartmentList();
  }
}

export async function didMount() {
  getDepartmentList();
}
