/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export type ResRole = ResObject<Role>;

// API -------------------------------------------------------------

export const API_ROLE_PAGE: Api = {
  title: "角色分页",
  path: "admin_user/list_role",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRolePage extends ReqPage {
  name: string;
}

// res
export type ResRolePage = ResPage<Role>;

// API -------------------------------------------------------------

export const API_ROLE_ADD: Api = {
  title: "添加角色",
  path: "admin_user/add_role",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRoleAdd {
  description: string;
  name: string;
  sort: number;
  status: boolean;
}

// res
// ResRole

// API -------------------------------------------------------------

export const API_ROLE_UPDATE: Api = {
  title: "编辑角色",
  path: "admin_user/update_role",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRoleUpdate extends ReqRoleAdd, ReqById {}

// res
// ResRole

// API -------------------------------------------------------------

export const API_ROLE_DEL: Api = {
  title: "删除角色",
  path: "admin_user/delete_role",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// API -------------------------------------------------------------

export const API_ROLE_PERMISSION: Api = {
  title: "获取角色权限",
  path: "admin_user/role_list_permission",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRolePermission {
  roleId: number;
}

// res
export type ResRolePermission = ResList<Permission>;

// API -------------------------------------------------------------

export const API_ROLE_MENU: Api = {
  title: "获取角色菜单",
  path: "admin_user/role_list_menu",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRoleMenu {
  roleId: number;
}

// res
export type ResRoleMenu = ResList<AppMenuDto>;

// API -------------------------------------------------------------

export const API_ROLE_PERMISSION_BIND: Api = {
  title: "角色关联权限",
  path: "admin_user/role_permission_bind",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRolePermissionBind {
  roleId: number;
  permissionId: number[];
}

// res

// API -------------------------------------------------------------

export const API_ROLE_MENU_BIND: Api = {
  title: "角色关联菜单",
  path: "admin_user/role_menu_bind",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqRoleMenuBind {
  roleId: number;
  menuId: number[];
}

// res
