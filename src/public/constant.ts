/**
 * @Date 2021-07-21 10:48:50
 * @Remark
 */

import _ from "lodash";

function getOption(data: NumStrMap) {
  return _.map(data, (el, key) => {
    const item: Option = {
      code: parseInt(key, 10),
      name: el,
    };
    return item;
  });
}

// 性别
export const GENDER_DICT: NumStrMap = {
  0: "未知",
  1: "男",
  2: "女",
};
export const GENDER_OPTION = getOption(GENDER_DICT);
// 管理员状态
export const ADMIN_STATUS_DICT: NumStrMap = {
  0: "不启用",
  1: "启用",
};
export const ADMIN_STATUS_OPTION = getOption(ADMIN_STATUS_DICT);
// 账户类型
export const ACCOUNT_TYPE_DICT: StrMap = {
  platformAccount: "平台账号",
  changeTheBatteryCompany: "换电公司",
  scenicAccount: "景区账号",
  dealerAccount: "经销商账号",
};
