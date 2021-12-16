/**
 * @Date 2020-06-28 14:46:37
 * @Remark
 */

// lib
// config
// script & methods & public
// http
// state
// service
import {
  simpleObjectService,
  simpleListService,
} from "public/service/simple.service";
// api
import {
  API_DEPARTMENT_LIST,
  ReqDepartmentAdd,
  API_DEPARTMENT_ADD,
  API_DEPARTMENT_UPDATE,
  ReqDepartmentUpdate,
  ResDepartment,
  ReqDepartment,
  API_DEPARTMENT_DEL,
  API_DEPARTMENT_DETAIL,
  ResDepartmentList,
} from "./api";
// interface && type && class
// 其它

// 列表
export async function getDepartmentListService() {
  return simpleListService<{}, ResDepartmentList, Department>(
    API_DEPARTMENT_LIST,
    {},
  );
}

// 添加
export async function addDepartmentService(params: ReqDepartmentAdd) {
  return simpleObjectService<ReqDepartmentAdd, ResDepartment, Department>(
    API_DEPARTMENT_ADD,
    params,
  );
}

// 详情
export async function getDepartmentService(params: string) {
  return simpleObjectService<ReqDepartment, ResDepartment, Department>(
    API_DEPARTMENT_DETAIL,
    {
      deptId: params,
    },
  );
}

// 编辑
export async function updateDepartmentService(params: ReqDepartmentUpdate) {
  return simpleObjectService<ReqDepartmentUpdate, ResDepartment, Department>(
    API_DEPARTMENT_UPDATE,
    params,
  );
}

// 删除
export async function delDepartmentService(params: string) {
  return simpleObjectService<ReqDepartment, ResDepartment, Department>(
    API_DEPARTMENT_DEL,
    {
      deptId: params,
    },
  );
}
