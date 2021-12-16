/**
 * @Date 2021-06-09 17:14:09
 * @Remark
 */

// lib
import _ from "lodash";
// config
// state
import { makeAutoObservable, toJS } from "mobx";
// script & methods & public
// 其它

class DictState {
  private mAreaMap: AreaMap = {
    province_list: {},
    city_list: {},
    county_list: {},
  };
  private mMenus: AppMenuDto[] = [];
  private mRoles: Role[] = [];
  private mPermissions: Permission[] = [];
  private mDict: MainDict = {
    accessoryEquipment: [],
    appUserStatus: [],
    appUserType: [],
    applicationStatus: [],
    batteryModule: [],
    batteryShape: [],
    batteryState: [],
    batteryType: [],
    contractStatus: [],
    contractTypeLease: [],
    coupon: [],
    couponApplication: [],
    couponApplyForStatusEnum: [],
    couponApplyForTypeEnum: [],
    couponPoolPendingIsRentEnum: [],
    couponPoolPendingIsRealNameEnum: [],
    couponInvalidTypeTypeEnum: [],
    dealerType: [], // 经销商主体类型
    dealerOperationType: [],
    batteryBusinessType: [], // 经销商运营类型
    faultType: [],
    frameOperationType: [],
    howToGetCoupons: [],
    importFailedDictionary: [],
    lease: [] /* 订单类型 */,
    leaseTerm: [],
    logisticsOrderStatus: [],
    rentRefund: [],
    ReturnRecordStatus: [], // 退款状态
    WithdrawTypeEnum: [] /** 提现审核-支付方式 */,
    orderPaymentMethod: [] /** 佣金记录-订单记录-支付方式 */,
    recycleBinTypeEnum: [],
    WithdrawApplyStatusEnum: [] /** 审核状态 */,
    WithdrawStatusEnum: [] /** 提现状态 */,
    contractRentSettlementType: [], // 结算类型
    orderStatus: [], // 订单状态
    departmentOccupationEnum: [], // 职位类型
    orderDetailsType: [], // 订单明细类型
    orderDetailsUnit: [], // 订单明细单位
    dealerPaymentRecordTypeEnum: [], // 打款记录 打款类型
    dealerPaymentRecordCategoryEnum: [], // 打款记录 打款类别
    scenicSpotFrameState: [], // 景区的运营状态
    scenicSpotOrderState: [], // 景区的订单状态
    paymentPeriod: [], // 付款周期
    alarmObject: [], // 报警设置 - 报警对象
    alarmType: [], // 报警设置 - 报警类型
  };
  constructor() {
    makeAutoObservable(this);
  }
  set areaMap(data: AreaMap) {
    this.mAreaMap = data;
  }
  get areaMap() {
    return toJS(this.mAreaMap);
  }
  set menus(data: AppMenuDto[]) {
    this.mMenus = data;
  }
  get menus() {
    return toJS(this.mMenus);
  }
  set permissions(data: Permission[]) {
    this.mPermissions = data;
  }
  get permissions() {
    return toJS(this.mPermissions);
  }
  set roles(data: Role[]) {
    this.mRoles = data;
  }
  get roles() {
    return toJS(this.mRoles);
  }
  set dict(data: MainDict) {
    this.mDict = data;
  }
  get dict() {
    return toJS(this.mDict);
  }
  //
  get batteryModuleList() {
    return toJS(this.mDict.batteryModule);
  }
  get batteryModuleMap() {
    return _.keyBy(this.batteryModuleList, "statusCode");
  }
  //
  get batteryShapeList() {
    return toJS(this.mDict.batteryShape);
  }
  get batteryShapeMap() {
    return _.keyBy(this.batteryShapeList, "statusCode");
  }
  //
  get batteryStateList() {
    return toJS(this.mDict.batteryState);
  }
  get batteryStateMap() {
    return _.keyBy(this.batteryStateList, "statusCode");
  }
  //
  get batteryTypeList() {
    return toJS(this.mDict.batteryType);
  }
  get batteryTypeMap() {
    return _.keyBy(this.batteryTypeList, "statusCode");
  }
  //
  get faultTypeList() {
    return toJS(this.mDict.faultType);
  }
  get faultTypeMap() {
    return _.keyBy(this.faultTypeList, "statusCode");
  }
  //
  get frameOperationTypeList() {
    return toJS(this.mDict.frameOperationType);
  }
  get frameOperationTypeMap() {
    return _.keyBy(this.frameOperationTypeList, "statusCode");
  }
  //
  get howToGetCouponsList() {
    return toJS(this.mDict.howToGetCoupons);
  }
  get howToGetCouponsMap() {
    return _.keyBy(this.howToGetCouponsList, "statusCode");
  }
  //
  get accessoryEquipmentList() {
    return toJS(this.mDict.accessoryEquipment);
  }
  get accessoryEquipmentMap() {
    return _.keyBy(this.accessoryEquipmentList, "statusCode");
  }
  //
  get appUserStatusList() {
    return toJS(this.mDict.appUserStatus);
  }
  get appUserStatusMap() {
    return _.keyBy(this.appUserStatusList, "statusCode");
  }
  //
  get appUserTypeList() {
    return toJS(this.mDict.appUserType);
  }
  get appUserTypeMap() {
    return _.keyBy(this.appUserTypeList, "statusCode");
  }
  //
  get applicationStatusList() {
    return toJS(this.mDict.applicationStatus);
  }
  get applicationStatusMap() {
    return _.keyBy(this.applicationStatusList, "statusCode");
  }
  // 订单类型
  get leaseList() {
    return toJS(this.mDict.lease);
  }
  get leaseMap() {
    return _.keyBy(this.leaseList, "statusCode");
  }
  // 租期类型
  get leaseTermList() {
    return toJS(this.mDict.leaseTerm);
  }
  get leaseTermMap() {
    return _.keyBy(this.leaseTermList, "statusCode");
  }
  // 类型 (直租，换电)
  get contractTypeLeaseList() {
    return toJS(this.mDict.contractTypeLease);
  }
  get contractTypeLeaseMap() {
    return _.keyBy(this.contractTypeLeaseList, "statusCode");
  }
  // 经销商主体类型
  get dealerTypeList() {
    return toJS(this.mDict.dealerType);
  }
  get dealerTypeMap() {
    return _.keyBy(this.dealerTypeList, "statusCode");
  }
  // 用于车架型号经营类型
  get dealerOperationTypeList() {
    return toJS(this.mDict.dealerOperationType);
  }
  get dealerOperationTypeMap() {
    return _.keyBy(this.dealerOperationTypeList, "statusCode");
  }
  // 经销商运营类型
  get batteryBusinessTypeList() {
    return toJS(this.mDict.batteryBusinessType);
  }
  get batteryBusinessTypeMap() {
    return _.keyBy(this.batteryBusinessTypeList, "statusCode");
  }
  // 物流状态
  get logisticsOrderStatusList() {
    return toJS(this.mDict.logisticsOrderStatus);
  }
  get logisticsOrderStatusMap() {
    return _.keyBy(this.logisticsOrderStatusList, "statusCode");
  }
  // 退款状态
  get returnRecordStatusList() {
    return toJS(this.mDict.ReturnRecordStatus);
  }
  get returnRecordStatusMap() {
    return _.keyBy(this.returnRecordStatusList, "statusCode");
  }
  // 优惠劵状态
  get couponList() {
    return toJS(this.mDict.coupon);
  }
  get couponMap() {
    return _.keyBy(this.couponList, "statusCode");
  }
  // 优惠劵申请审核状态
  get couponApplyForStatusEnumList() {
    return toJS(this.mDict.couponApplyForStatusEnum);
  }
  get couponApplyForStatusEnumMap() {
    return _.keyBy(this.couponApplyForStatusEnumList, "statusCode");
  }
  // 优惠劵申请（优惠劵 或 额度）
  get couponApplyForTypeEnumList() {
    return toJS(this.mDict.couponApplyForTypeEnum);
  }
  get couponApplyForTypeEnumMap() {
    return _.keyBy(this.couponApplyForTypeEnumList, "statusCode");
  }
  // 是否在租字典
  get couponPoolPendingIsRentEnumList() {
    return toJS(this.mDict.couponPoolPendingIsRentEnum);
  }
  get couponPoolPendingIsRentEnumMap() {
    return _.keyBy(this.couponPoolPendingIsRentEnumList, "statusCode");
  }
  // 是否实名字典
  get couponPoolPendingIsRealNameEnumList() {
    return toJS(this.mDict.couponPoolPendingIsRealNameEnum);
  }
  get couponPoolPendingIsRealNameEnumMap() {
    return _.keyBy(this.couponPoolPendingIsRealNameEnumList, "statusCode");
  }
  // 优惠劵类型
  get couponInvalidTypeTypeEnumList() {
    return toJS(this.mDict.couponInvalidTypeTypeEnum);
  }
  get couponInvalidTypeTypeEnumMap() {
    return _.keyBy(this.couponInvalidTypeTypeEnumList, "statusCode");
  }
  /** 审核状态 */
  get withdrawApplyStatusEnumList() {
    return toJS(this.mDict.WithdrawApplyStatusEnum);
  }
  get withdrawApplyStatusEnumMap() {
    return _.keyBy(this.withdrawApplyStatusEnumList, "statusCode");
  }
  /** 提现状态 */
  get withdrawStatusEnumList() {
    return toJS(this.mDict.WithdrawStatusEnum);
  }
  get withdrawStatusEnumMap() {
    return _.keyBy(this.withdrawStatusEnumList, "statusCode");
  }
  /** 提现记录-支付方式 */
  get withdrawTypeEnumList() {
    return toJS(this.mDict.WithdrawTypeEnum);
  }
  get withdrawTypeEnumMap() {
    return _.keyBy(this.withdrawTypeEnumList, "statusCode");
  }
  // 合约状态
  get contractStatusList() {
    return toJS(this.mDict.contractStatus);
  }
  get contractStatusMap() {
    return _.keyBy(this.contractStatusList, "statusCode");
  }
  // 佣金记录-支付方式
  get orderPaymentMethodList() {
    return toJS(this.mDict.orderPaymentMethod);
  }
  get orderPaymentMethodMap() {
    return _.keyBy(this.orderPaymentMethodList, "statusCode");
  }
  // 设备回收类型
  get recycleBinTypeEnumList() {
    return toJS(this.mDict.recycleBinTypeEnum);
  }
  get recycleBinTypeEnumMap() {
    return _.keyBy(this.recycleBinTypeEnumList, "statusCode");
  }
  // 结算类型  订单类型
  // 结算类型
  get contractRentSettlementTypeList() {
    return toJS(this.mDict.contractRentSettlementType);
  }
  get contractRentSettlementTypeMap() {
    return _.keyBy(this.contractRentSettlementTypeList, "statusCode");
  }
  // 订单状态
  get orderStatusList() {
    return toJS(this.mDict.orderStatus);
  }
  get orderStatusMap() {
    return _.keyBy(this.orderStatusList, "statusCode");
  }
  // 管理员的职位类型
  get departmentOccupationEnumList() {
    return toJS(this.mDict.departmentOccupationEnum);
  }
  get departmentOccupationEnumMap() {
    return _.keyBy(this.departmentOccupationEnumList, "statusCode");
  }
  // 订单明细类型
  get orderDetailsTypeList() {
    return toJS(this.mDict.orderDetailsType);
  }
  get orderDetailsTypeMap() {
    return _.keyBy(this.orderDetailsTypeList, "statusCode");
  }
  // 订单明细单位
  get orderDetailsUnitList() {
    return toJS(this.mDict.orderDetailsUnit);
  }
  get orderDetailsUnitMap() {
    return _.keyBy(this.orderDetailsUnitList, "statusCode");
  }
  // 经销商详情-> 打款记录 打款类型
  get dealerPaymentRecordTypeEnumList() {
    return toJS(this.mDict.dealerPaymentRecordTypeEnum);
  }
  get dealerPaymentRecordTypeEnumMap() {
    return _.keyBy(this.dealerPaymentRecordTypeEnumList, "statusCode");
  }
  // 经销商详情-> 打款记录 打款类别
  get dealerPaymentRecordCategoryEnumList() {
    return toJS(this.mDict.dealerPaymentRecordCategoryEnum);
  }
  get dealerPaymentRecordCategoryEnumMap() {
    return _.keyBy(this.dealerPaymentRecordCategoryEnumList, "statusCode");
  }
  // 景区状态的运营状态
  get scenicSpotFrameStateList() {
    return toJS(this.mDict.scenicSpotFrameState);
  }
  get scenicSpotFrameStateMap() {
    return _.keyBy(this.scenicSpotFrameStateList, "statusCode");
  }
  // 景区状态的订单状态
  get scenicSpotOrderStateList() {
    return toJS(this.mDict.scenicSpotOrderState);
  }
  get scenicSpotOrderStateMap() {
    return _.keyBy(this.scenicSpotOrderStateList, "statusCode");
  }
  // 付款周期
  get paymentPeriodList() {
    return toJS(this.mDict.paymentPeriod);
  }
  get paymentPeriodMap() {
    return _.keyBy(this.paymentPeriodList, "statusCode");
  }
  // 报警对象
  get alarmObjectList() {
    return toJS(this.mDict.alarmObject);
  }
  get alarmObjectMap() {
    return _.keyBy(this.paymentPeriodList, "statusCode");
  }
  // 报警类型
  get alarmTypeList() {
    return toJS(this.mDict.alarmType);
  }
  get alarmTypeMap() {
    return _.keyBy(this.alarmTypeList, "statusCode");
  }
}

export default DictState;
