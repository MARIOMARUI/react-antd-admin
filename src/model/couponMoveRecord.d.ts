/**
 * @Date 2021-10-13 17:31:20
 * @Remark
 */

interface CouponMoveRecordDto {
  /** 合约类型 */
  contractType: string | null;
  /** 优惠劵转移记录ID */
  couponMoveRecordId: string;
  /** 优惠券名称 */
  couponName: string | null;
  /** 使用的券池id */
  couponPoolId: string | null;
  /** 面额 */
  denomination: number | null;
  /** 生效时间 */
  effectiveDate: string | null;
  /** 启用额度 */
  enableQuota: number | null;
  /** 过期时间 */
  expirationDate: string | null;
  /** 是否用于首租 */
  isUseFirstRent: boolean | null;
  /** 是否用于续租 */
  isUseRenewRent: boolean | null;
  /** 套餐类型 */
  leaseEnum: string | null;
  /** 最短租期 */
  leaseTerm: number | null;
  /** 租期类型 */
  leaseTermEnum: string | null;
  /** 转移张数 */
  moveCount: number | null;
  /** 转移额度 */
  moveQuota: number;
  /** 转移类型 */
  moveType: string;
  /** 接受经销商姓名 */
  receiveDealerName: string | null;
  receiveLoginName: string;
  /** 接受人id */
  receiveUserId: string;
  receiveUserName: string;
  /** 接受人类型 */
  receiveUserType: string;
  /** 兑换积分 */
  redeemPoints: number | null;
  /** 发送经销商姓名 */
  sendDealerName: string | null;
  sendLoginName: string;
  /** 发送人ID */
  sendUserId: string;
  sendUserName: string;
  /** 发送人类型 */
  sendUserType: string;
}

type CouponMoveRecord = CouponMoveRecordDto;
