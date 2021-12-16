/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface ChangeBatteryCabinetDto {
  /** 站点id */
  changeSiteId: string;
  /** 柜号 */
  cabinetNum: number;
  /** 柜子id */
  cabinetId: string;
  /** 站点名称 */
  changeSiteName: string;
  /** 经销商ID */
  directLeaseDealerId: string;
  /** 经销商名称 */
  dealerName: string;
  /** 经销商电话 */
  dealerTel: string;
  /** 联系电话 */
  changeSiteTel: number;
  /** 经度 */
  longitude: number;
  /** 纬度 */
  latitude: number;
  /** 省 */
  province: string;
  /** 市 */
  city: string;
  /** 区 */
  region: string;
  /** 详细地址 */
  location: string;
  /** 开门编码 */
  openCode: number;
  /** 模块编号 */
  modelNum: number;
  /** apikey */
  apikey: number;
  /** 是否启用 */
  status: number;
}

type ChangeBatteryCabinetModel = ChangeBatteryCabinetDto;
