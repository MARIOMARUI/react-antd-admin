/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 18:02:53
 * @LastEditTime: 2021-09-17 17:37:29
 */
interface SalesmanDto {
  accountTypeEnum: string; // "platformAccount";
  accountTypeEnums: string; // "platformAccount,changeTheBatteryCompany,scenicAccount,dealerAccount";
  companyId: string | undefined; // 其实是null
  companyName: string | undefined;
  deptId: string | undefined;
  deptName: string | undefined;
  founderId: string;
  avatarUrl: string;
  gender: number;
  gmtCreate: string;
  loginName: string;
  mobile: string;
  status: number;
  userId: string;
  userName: string;
  departmentOccupationEnum: string; //  职位 后台固定
  }

  type Salesman = SalesmanDto;
