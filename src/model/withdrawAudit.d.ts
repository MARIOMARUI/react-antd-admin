/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface WithdrawAuditDto {
  /** 提现账号 */
  /** 用户手机号 */
  mobile: string;
  /** 真实姓名 */
  userName: string;
  /** 提现类型 */
  /** 支付方式 */
  type: string;
  /** 提现金额 */
  amount: number;
  /** 审核 */
  /** 提现记录ID */
  appUserWithdrawDetailsId: string;
  /** 审核类型 */
  applyStatus: string;
}

type WithdrawAuditModel = WithdrawAuditDto;
