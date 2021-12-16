/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export type ResPermission = ResObject<Permission>;

// API -------------------------------------------------------------

export const API_PERMISSION_PAGE: Api = {
  title: "权限分页",
  path: "admin_user/list_permission",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqPermissionPage extends ReqPage {
  name: string;
}

// res
export type ResPermissionPage = ResPage<Permission>;

// API -------------------------------------------------------------

export const API_PERMISSION_ADD: Api = {
  title: "添加权限",
  path: "admin_user/add_permission",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqPermissionAdd {
  menuId?: number;
  name: string;
  sort: number;
  status: number;
  uri: string;
  value: string;
}

// res
// ResPermission

// API -------------------------------------------------------------

export const API_PERMISSION_UPDATE: Api = {
  title: "编辑权限",
  path: "admin_user/update_permission",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqPermissionUpdate extends ReqPermissionAdd, ReqById {}

// res
// ResPermission

// API -------------------------------------------------------------

export const API_PERMISSION_DEL: Api = {
  title: "删除权限",
  path: "admin_user/delete_permission",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};
