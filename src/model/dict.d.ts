/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-11-12 09:53:28
 */
/**
 * @Date 2021-06-22 09:54:53
 * @Remark
 */

interface DictDto {
  desc: string;
  statusCode: string;
  value: string;
}

type Dict = DictDto;

interface MainDict {
  accessoryEquipment: Dict[];
  appUserStatus: Dict[];
  appUserType: Dict[];
  /** 免押审核状态 */
  applicationStatus: Dict[];
  batteryModule: Dict[];
  batteryShape: Dict[];
  batteryState: Dict[];
  batteryType: Dict[];
  contractStatus: Dict[];
  contractTypeLease: Dict[];
  coupon: Dict[];
  couponApplication: Dict[];
  /** 优惠劵申请状态 */
  couponApplyForStatusEnum: Dict[];
  couponApplyForTypeEnum: Dict[];
  /** 是否在租 */
  couponPoolPendingIsRentEnum: Dict[];
  /** 是否实名 */
  couponPoolPendingIsRealNameEnum: Dict[];
  /** 优惠劵类型 */
  couponInvalidTypeTypeEnum: Dict[];
  dealerType: Dict[];
  dealerOperationType: Dict[];
  batteryBusinessType: Dict[];
  /** 返厂原因 */
  faultType: Dict[];
  frameOperationType: Dict[];
  howToGetCoupons: Dict[];
  importFailedDictionary: Dict[];
  lease: Dict[]; // 订单类型
  leaseTerm: Dict[];
  logisticsOrderStatus: Dict[];
  rentRefund: Dict[];
  // 退款状态
  ReturnRecordStatus: Dict[];
  /** 支付方式 */
  WithdrawTypeEnum: Dict[];
  /** 审核状态 */
  WithdrawApplyStatusEnum: Dict[];
  /** 提现状态 */
  WithdrawStatusEnum: Dict[];
  /** 佣金记录-支付方式 */
  orderPaymentMethod: Dict[];
  /** 设备回收类型 */
  recycleBinTypeEnum: Dict[];
  /* 结算类型 */
  contractRentSettlementType: Dict[];
  /* 订单状态 */
  orderStatus: Dict[];
  // 合约状态
  contractStatus: Dict[];
  // 职位类型
  departmentOccupationEnum: Dict[];
  // 订单明细类型
  orderDetailsType: Dict[];
  // 订单明细单位
  orderDetailsUnit: Dict[];
  // 打款记录 打款类型
  dealerPaymentRecordTypeEnum: Dict[];
  // 打款记录 打款类别
  dealerPaymentRecordCategoryEnum: Dict[];
  // 景区的运营状态
  scenicSpotFrameState: Dict[];
  // 景区的订单状态
  scenicSpotOrderState: Dict[];
  // 付款周期
  paymentPeriod: Dict[];
  // 报警对象
  alarmObject: Dict[];
  // 报警类型
  alarmType: Dict[];
}
