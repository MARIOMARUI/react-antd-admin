/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export type ResMenu = ResObject<AppMenuDto>;

// API -------------------------------------------------------------

export const API_MENU_PAGE: Api = {
  title: "菜单分页",
  path: "admin_user/list_menu",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqMenuPage extends ReqPage {
  title: string;
}

// res
export type ResMenuPage = ResPage<AppMenuDto>;

// API -------------------------------------------------------------

export const API_MENU_ADD: Api = {
  title: "添加菜单",
  path: "admin_user/add_menu",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqMenuAdd {
  level?: number;
  parentId?: number;
  sort: number;
  title: string;
  uri: string;
}

// res
// ResMenu

// API -------------------------------------------------------------

export const API_MENU_UPDATE: Api = {
  title: "编辑菜单",
  path: "admin_user/update_menu",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqMenuUpdate extends ReqMenuAdd, ReqById {}

// res
// ResMenu

// API -------------------------------------------------------------

export const API_MENU_DEL: Api = {
  title: "删除菜单",
  path: "admin_user/delete_menu",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};
