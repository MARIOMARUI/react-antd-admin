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
  addAdminService,
  delAdminService,
  getAdminPageService,
  updateAdminService,
} from "biz/admin/service";
import { getUriArrFromUoloadFile } from "biz/file/logic";
import { getRoleListService } from "biz/role/service";
import { chooseCheck } from "./logic";
import { getDictService } from "biz/dict/service";
import { searchRegionService } from "biz/region/service";
// interface && type && class
// 其它

export async function getAdminPage() {
  const sp = state.getSearch();
  logUtils.info("搜索参数", sp);
  // 调用服务
  state.setLoading(true);
  const result = await getAdminPageService({
    pageNum: state.page,
    pageSize: state.size,
    userName: sp.userName || "",
    mobile: sp.mobile || "",
    accountTypeEnum: sp.accountTypeEnum || "",
  });
  state.setLoading(false);
  // 成功
  if (result.payload) {
    state.setTotal(result.payload.total);
    state.setList(result.payload.list);
  }
  // 失败和异常
}

export async function addAdmin(form: any) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  const avatarUrl = getUriArrFromUoloadFile(form.avatarUrl)[0];

  if (chooseCheck(form.accountTypeEnum, form.accountTypeEnums)) {
    toast.warn("不正确的可添加账号类型组合");
    return;
  }
  // 调用服务
  state.setEditModalLoading(true);
  const result = await addAdminService({
    accountTypeEnum: form.accountTypeEnum,
    accountTypeEnums: form.accountTypeEnums
      ? form.accountTypeEnums.join(",")
      : "",
    avatarUrl,
    companyId: form.company,
    deptId: form.department,
    gender: form.gender,
    loginName: form.loginName.trim(),
    mobile: form.mobile.trim(),
    status: form.status,
    userName: form.userName.trim(),
    // 只有新增时设置
    userPass: form.userPass.trim(),
    /* 分配账号 */
    toConfigurePeople: form.toConfigurePeople,
    /* 职位 */
    departmentOccupationEnum: form.departmentOccupationEnum,
    // 大区
    regionId: form.regionId,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("添加成功");
    state.setEditModal(false);
    getAdminPage();
  }
}

export async function updateAdmin(form: any, id: string) {
  logUtils.info(`${MODULE_NAME}页面表单`, form);
  const avatarUrl = getUriArrFromUoloadFile(form.avatarUrl)[0];

  if (chooseCheck(form.accountTypeEnum, form.accountTypeEnums)) {
    toast.warn("不正确的可添加账号类型组合");
    return;
  }

  // 调用服务
  state.setEditModalLoading(true);
  const result = await updateAdminService({
    userId: id,
    accountTypeEnum: form.accountTypeEnum,
    accountTypeEnums: form.accountTypeEnums
      ? form.accountTypeEnums.join(",")
      : "",
    avatarUrl,
    companyId: form.company,
    deptId: form.department,
    gender: form.gender,
    loginName: form.loginName.trim(),
    mobile: form.mobile.trim(),
    status: form.status,
    userName: form.userName.trim(),
    /* 职位 可以修改 */
    departmentOccupationEnum: form.departmentOccupationEnum,
    // 大区
    regionId: form.regionId,
  });
  state.setEditModalLoading(false);
  // 成功
  if (result.payload) {
    toast.success("编辑成功");
    state.setEditModal(false);
    getAdminPage();
  }
}

export async function delAdmin(id: string) {
  // 调用服务
  const result = await delAdminService(id);
  // 成功
  if (result.payload) {
    toast.success("删除成功");
    getAdminPage();
  }
}

// 获取区域
export async function getRegionList() {
  const result = await searchRegionService();
  if (result.payload) {
    state.setRegionList(result.payload.list);
  }
}

export async function didMount() {
  await getDictService();
  getRoleListService();
  getAdminPage();
  getRegionList();
}
