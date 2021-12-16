/**
 * @Date 2021-07-21 09:42:02
 * @Remark
 */

// lib
// import _ from "lodash";
// config
// script & methods & public
import { dictState } from "state/global";
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
  ReqRolePage,
  ResRolePage,
  API_ROLE_PAGE,
  ReqRoleAdd,
  API_ROLE_ADD,
  API_ROLE_UPDATE,
  ReqRoleUpdate,
  API_ROLE_DEL,
  ResRole,
  API_ROLE_PERMISSION,
  ReqRolePermission,
  ResRolePermission,
  API_ROLE_PERMISSION_BIND,
  ReqRolePermissionBind,
  API_ROLE_MENU_BIND,
  ReqRoleMenuBind,
  API_ROLE_MENU,
  ReqRoleMenu,
  ResRoleMenu,
} from "./api";
// interface && type && class
// 其它

// 角色分页
export async function getRolePageService(params: ReqRolePage) {
  return simplePageService<ReqRolePage, ResRolePage, Role>(
    API_ROLE_PAGE,
    params,
  );
}

// 角色列表
export async function getRoleListService() {
  const result = await simplePageService<ReqRolePage, ResRolePage, Role>(
    API_ROLE_PAGE,
    {
      pageNum: 1,
      pageSize: 999,
      name: "",
    },
  );
  if (result.payload) {
    dictState.roles = result.payload.list;
  }
}

// 角色添加
export async function addRoleService(params: ReqRoleAdd) {
  return simpleObjectService<ReqRoleAdd, ResRole, Role>(API_ROLE_ADD, params);
}

// 角色编辑
export async function updateRoleService(params: ReqRoleUpdate) {
  return simpleObjectService<ReqRoleUpdate, ResRole, Role>(
    API_ROLE_UPDATE,
    params,
  );
}

// 角色删除
export async function delRoleService(id: number) {
  return simpleBooleanService<ReqById, ResBoolean>(API_ROLE_DEL, {
    id,
  });
}

// 获取角色权限
export async function getRolePermissionService(id: number) {
  return simpleListService<ReqRolePermission, ResRolePermission, Permission>(
    API_ROLE_PERMISSION,
    {
      roleId: id,
    },
  );
}

// 获取角色菜单
export async function getRoleMenuService(id: number) {
  return simpleListService<ReqRoleMenu, ResRoleMenu, AppMenuDto>(
    API_ROLE_MENU,
    {
      roleId: id,
    },
  );
}

// 编辑角色权限
export async function editRolePermissionService(
  id: number,
  selected: string[],
) {
  // 打开接口
  const a1 = await open<ReqRolePermissionBind, ResBoolean>(
    API_ROLE_PERMISSION_BIND,
    {
      roleId: id,
      permissionId: selected.map((el) => parseInt(el, 10)),
    },
  );
  // 创建返回数据
  const data = bag<boolean>(a1);
  // 特殊处理
  if (isOkRes(a1)) {
    data.payload = true;
  }
  return data;
}

// 编辑角色菜单
export async function editRoleMenuService(id: number, selected: string[]) {
  // 打开接口
  const a1 = await open<ReqRoleMenuBind, ResBoolean>(API_ROLE_MENU_BIND, {
    roleId: id,
    menuId: selected.map((el) => parseInt(el, 10)),
  });
  // 创建返回数据
  const data = bag<boolean>(a1);
  // 特殊处理
  if (isOkRes(a1)) {
    data.payload = true;
  }
  return data;
}
