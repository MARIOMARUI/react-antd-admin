/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-18 09:28:00
 * @LastEditTime: 2021-11-10 10:05:20
 */
/**
 * @Date 2021-10-13 16:04:16
 * @Remark
 */

/** 经销商 经营区域 */
interface BusinessAreaVos {
  /** 营业区域 业务id（添加不传 修改必传） */
  businessAreaId?: string;
  /** 市 */
  city: string;
  /** 经销商业务id */
  directLeaseDealerId?: string;
  /** 区 */
  district: string;
  /** 省 */
  province: string;
}

/** 经销商 list */
interface Dealer {
  /* 包年 */
  annualNum: number | null;
  /* 佣金 */
  batteryCommissionRatio: number;
  /* 下级数量 */
  belongNum: number;
  /** 营业区域 */
  businessAreaVos: BusinessAreaVos[] | null; // 返回用
  /** 营业执照编号 */
  businessLicenseNumber: string | null;
  /** 营业执照照片 */
  businessLicensePhoto: string | null;
  /** 公司名称 */
  companyName: string | null;
  /* 合约 */
  contractNum: number | null;
  /* 优惠券 */
  couponNum: number | null;
  /** 经销商级别 */
  dealerLevel: number;
  /** 经销商名称 */
  dealerName: string;
  /* 运营类型 */
  dealerOperationTypeEnum: string;
  /** 经销商主体类型 */
  dealerTypeEnum: string;
  /** 业务id（添加不传 修改必传） */
  directLeaseDealerId: string;
  directLeaseDealerPName: string | null;
  /** 所属经销商业务id */
  directLeaseDealerPid: string;
  directLeaseDealerTopId: string | null;
  /* 所属公司 */
  directLeaseDealerTopName: string | null;
  /** 起禁用 0禁用 1启用 */
  enable: boolean;
  /* 待租 */
  forRentNum: number;
  /* 免押 */
  freeDepositNum: number;
  gmtCreate: null;
  /** 身份证号 */
  identityNumber: string;
  /* 过期 */
  invalidContractNum: number;
  /* 登录账号 */
  loginName: string;
  /** 国徽面 */
  nationalEmblem: string;
  /* 离线 */
  offlineNum: number;
  /** 负责人 */
  personInCharge: string;
  /** 负责人电话 */
  phoneOfThePersonInCharge: string;
  /** 人像面 */
  portraitFace: string;
  /** 备注 */
  remark?: string | null;
  /** 业务员id */
  salesmanId: string;
  /** 序列号 */
  serialNumber: number;
  /** 关联user账号id */
  userId: string;
  /** 关联user账号名 */
  userName: string;
  /** 付款周期 */
  paymentPeriod: string;
}
