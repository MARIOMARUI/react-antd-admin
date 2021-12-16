/**
 * @Date 2021-07-21 09:42:02
 * @Remark
 */

// lib
// import _ from "lodash";
// config
// script & methods & public
// http
// service
import {
  simplePageService,
  simpleObjectService,
  simpleBooleanService,
} from "public/service/simple.service";
import { dictState } from "state/global";
// api
import {
  ReqPermissionPage,
  ResPermissionPage,
  API_PERMISSION_PAGE,
  ReqPermissionAdd,
  API_PERMISSION_ADD,
  API_PERMISSION_UPDATE,
  ReqPermissionUpdate,
  API_PERMISSION_DEL,
  ResPermission,
} from "./api";
// interface && type && class
// 其它

// 权限分页
export async function getPermissionPageService(params: ReqPermissionPage) {
  return simplePageService<ReqPermissionPage, ResPermissionPage, Permission>(
    API_PERMISSION_PAGE,
    params,
  );
}

// 权限列表
export async function getPermissionListService() {
  const result = await simplePageService<
    ReqPermissionPage,
    ResPermissionPage,
    Permission
  >(API_PERMISSION_PAGE, {
    pageNum: 1,
    pageSize: 999,
    name: "",
  });
  if (result.payload) {
    dictState.permissions = result.payload.list;
  }
}

// 权限添加
export async function addPermissionService(params: ReqPermissionAdd) {
  return simpleObjectService<ReqPermissionAdd, ResPermission, Permission>(
    API_PERMISSION_ADD,
    params,
  );
}

// 权限编辑
export async function updatePermissionService(params: ReqPermissionUpdate) {
  return simpleObjectService<ReqPermissionUpdate, ResPermission, Permission>(
    API_PERMISSION_UPDATE,
    params,
  );
}

// 权限删除
export async function delPermissionService(id: number) {
  return simpleBooleanService<ReqById, ResBoolean>(API_PERMISSION_DEL, {
    id,
  });
}
