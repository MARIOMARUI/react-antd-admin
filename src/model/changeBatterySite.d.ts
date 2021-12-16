/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface ChangeBatterySiteDto {
  // 站点名称
  changeSiteName: string;
  // 电话
  changeSiteTel: string;
  // 经销商id
  directLeaseDealerId: string;
  // 站点编号
  changeSiteId: string;
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

type ChangeBatterySiteModel = ChangeBatterySiteDto;
