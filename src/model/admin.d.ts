/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-10-27 18:07:11
 */
/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface AdminDto {
  accountTypeEnum: string; // "platformAccount";
  accountTypeEnums: string; // "platformAccount,changeTheBatteryCompany,scenicAccount,dealerAccount";
  avatarUrl: string;
  companyId: string | undefined; // 其实是null
  companyName: string | undefined;
  departmentOccupationEnum: string | undefined; //  职位 后台固定
  deptId: string | undefined;
  deptName: string | undefined;
  founderId: string | undefined;
  gender: number;
  gmtCreate: string;
  id: string;
  loginName: string;
  mobile: string;
  status: number;
  toConfigurePeople: string | undefined; // 所分配账号
  userId: string;
  userName: string;
  // 管理员列表添加用到
  regionId: string;
}

interface DepartmentAdmin {
  mobile: string;
  userId: string;
  userName: string;
}

type Admin = AdminDto;
