/**
 * @Date 2021-06-18 14:40:38
 * @Remark
 */

export interface ReqDepartment {
  deptId: string;
}

export type ResDepartment = ResObject<Department>;

// API -------------------------------------------------------------

export const API_DEPARTMENT_LIST: Api = {
  title: "部门列表",
  path: "dept/get_dept_list",
  method: "POST",
  prefix: "li_dian",
  remark: "部门",
};

// req
// export interface ReqDepartmentList {
//   //
// }

// res
export type ResDepartmentList = ResList<Department>;

// API -------------------------------------------------------------

export const API_DEPARTMENT_ADD: Api = {
  title: "部门添加",
  path: "dept/add",
  method: "POST",
  prefix: "li_dian",
  remark: "部门",
};

// req
export interface ReqDepartmentAdd {
  departmentPhone: string;
  deptName: string;
  deptPId: string;
  personInChargeUserId: string;
  remark: string;
}

// res
// ResDepartment

// API -------------------------------------------------------------

export const API_DEPARTMENT_UPDATE: Api = {
  title: "编辑部门",
  path: "dept/update",
  method: "POST",
  prefix: "li_dian",
  remark: "部门",
};

// req
export interface ReqDepartmentUpdate extends ReqDepartmentAdd, ReqDepartment {}

// res
// ResDepartment

// API -------------------------------------------------------------

export const API_DEPARTMENT_DEL: Api = {
  title: "删除部门",
  path: "dept/del",
  method: "POST",
  prefix: "li_dian",
  remark: "部门",
};

// req
// ReqDepartment

// res
export type ResDepartmentDel = ResBoolean;

// API -------------------------------------------------------------

export const API_DEPARTMENT_DETAIL: Api = {
  title: "部门详情",
  path: "dept/get",
  method: "POST",
  prefix: "li_dian",
  remark: "部门",
};

// req
// ReqDepartment

// res
// // ResDepartment
