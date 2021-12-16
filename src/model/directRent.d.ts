/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface DirectRentDto {
  // 经销商名称
  dealerName: string;
  // 经销商电话
  dealerTel: string;
  // 经销商id
  directLeaseDealerId: string;
  // 站点Id
  directSiteId: string;
  // 站点名
  directSiteName: string;
  // 站点电话
  directSiteTel: string;
  // 省
  province: string;
  // 市
  city: string;
  // 区
  region: string;
  // 纬度
  latitude: number;
  // 经度
  longitude: number;
  // 详细地址
  location: string;
  // 是否启用
  status: number;
}

type DirectRentModel = DirectRentDto;
