/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-10 18:18:57
 * @LastEditTime: 2021-10-27 16:50:34
 */
/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface CompanyDto extends AreaCode {
  address: string;
  companyId: string;
  companyName: string;
  gmtCreate: string;
  remark: string;
  regionId: string;
  regionName: string;
}

type Company = CompanyDto;
