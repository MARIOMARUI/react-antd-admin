/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface DepartmentDto {
  // company: null;
  departmentPhone: string;
  deptId: string;
  deptName: string;
  pdept: null | DepartmentDto;
  personInChargeUser: null | DepartmentAdmin;
  remark: string;
}

type Department = DepartmentDto;
