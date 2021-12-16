/**
 * @Date 2021-07-21 09:42:02
 * @Remark
 */

// lib
// config
// script & methods & public
import logUtils from "utils/logUtils";
// http
import { open, bag, isOkRes } from "public/http/api";
// service
import {
  simplePageService,
  simpleObjectService,
  simpleBooleanService,
  simpleListService,
} from "public/service/simple.service";
// api
import {
  ReqAdminPage,
  ResAdminPage,
  API_ADMIN_PAGE,
  ReqAdminAdd,
  API_ADMIN_ADD,
  API_ADMIN_UPDATE,
  ReqAdminUpdate,
  API_ADMIN_DEL,
  ResAdmin,
  API_ADMIN_ROLES,
  ReqAdmin,
  ResAdminRoles,
  API_ADMIN_ROLE_BIND,
  ReqAdminRoleBind,
  API_ADMIN_ACCOUNT_TYPE,
  ResAdminAccountType,
} from "./api";
// interface && type && class
// 其它

// 管理员账户类型
export async function getAdminAccountTypeService() {
  return simpleListService<{}, ResAdminAccountType, Dict>(
    API_ADMIN_ACCOUNT_TYPE,
    {},
  );
}

// 管理员分页
export async function getAdminPageService(params: ReqAdminPage) {
  return simplePageService<ReqAdminPage, ResAdminPage, Admin>(
    API_ADMIN_PAGE,
    params,
  );
}

// 管理员搜索
export async function searchAdminService(params?: string) {
  return simplePageService<ReqAdminPage, ResAdminPage, Admin>(API_ADMIN_PAGE, {
    pageNum: 1,
    pageSize: 50,
    userName: params || "",
  });
}

// 管理员添加
export async function addAdminService(params: ReqAdminAdd) {
  return simpleObjectService<ReqAdminAdd, ResAdmin, Admin>(
    API_ADMIN_ADD,
    params,
  );
}

// 管理员编辑
export async function updateAdminService(params: ReqAdminUpdate) {
  return simpleObjectService<ReqAdminUpdate, ResAdmin, Admin>(
    API_ADMIN_UPDATE,
    params,
  );
}

// 管理员删除
export async function delAdminService(id: string) {
  return simpleBooleanService<ReqByStrId, ResBoolean>(API_ADMIN_DEL, {
    id,
  });
}

// 管理员角色列表
export async function getAdminRolesService(id: string) {
  return simpleListService<ReqAdmin, ResAdminRoles, Role>(API_ADMIN_ROLES, {
    userId: id,
  });
}

// 编辑管理员角色
export async function editAdminRoleService(id: string, selected: string[]) {
  logUtils.log("id", id);
  logUtils.log("selected", selected);
  // 打开接口
  const a1 = await open<ReqAdminRoleBind, ResBoolean>(API_ADMIN_ROLE_BIND, {
    userId: id,
    roleId: selected.map((el) => parseInt(el, 10)),
  });
  // 创建返回数据
  const data = bag<boolean>(a1);
  // 特殊处理
  if (isOkRes(a1)) {
    data.payload = true;
  }
  return data;
}
