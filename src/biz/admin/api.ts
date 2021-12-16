/**
 * @Date 2021-07-21 14:24:10
 * @Remark
 */

export interface ReqAdmin {
  userId: string;
}

export type ResAdmin = ResObject<Admin>;

// API -------------------------------------------------------------

export const API_ADMIN_ACCOUNT_TYPE: Api = {
  title: "管理员账户类型",
  path: "admin_user/get_account_type",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req

// res
export interface ResAdminAccountType extends ResList<Dict> {}

// API -------------------------------------------------------------

export const API_ADMIN_PAGE: Api = {
  title: "管理员分页",
  path: "admin_user/list_user",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqAdminPage extends ReqPage {
  userName?: string;
  mobile?: string;
  accountTypeEnum?: string;
}

// res
export type ResAdminPage = ResPage<Admin>;

// API -------------------------------------------------------------

export const API_ADMIN_ADD: Api = {
  title: "添加管理员",
  path: "admin_user/add_user",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqAdminAdd {
  accountTypeEnum: string;
  accountTypeEnums: string;
  avatarUrl: string;
  companyId?: number;
  deptId?: number;
  gender: number;
  loginName: string;
  mobile: string;
  status: number;
  userName: string;
  userPass?: string; // 编辑时候不传
  toConfigurePeople?: string; // 分配账号
  departmentOccupationEnum: string; // 职位
  regionId: string; // 大区
}

// res
// ResAdmin

// API -------------------------------------------------------------

export const API_ADMIN_UPDATE: Api = {
  title: "编辑管理员",
  path: "admin_user/update_user",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqAdminUpdate extends ReqAdminAdd, ReqAdmin {}

// res
// ResAdmin

// API -------------------------------------------------------------

export const API_ADMIN_DEL: Api = {
  title: "删除管理员",
  path: "admin_user/delete_user",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
// ReqByStrId

// res
// ResAdmin

// API -------------------------------------------------------------

export const API_ADMIN_ROLES: Api = {
  title: "管理员角色列表",
  path: "admin_user/user_list_role",
  method: "GET",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
// ReqAdmin

// res
export type ResAdminRoles = ResList<Role>;

// API -------------------------------------------------------------

export const API_ADMIN_ROLE_BIND: Api = {
  title: "管理员关联角色",
  path: "admin_user/user_role_bind",
  method: "POST",
  prefix: "li_dian",
  remark: "admin-user-controller",
};

// req
export interface ReqAdminRoleBind {
  userId: string;
  roleId: number[];
}

// res
export type ResAdminRoleBind = ResBoolean;
