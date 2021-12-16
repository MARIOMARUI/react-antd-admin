/**
 * @Date 2020-06-22 16:16:20
 * @Remark
 */

import {
  EMAIL_RULE,
  LENGTH_RULE,
  MIN_MAX_RULE,
  REQUIRED_RULE,
} from "utils/validator";

export const INPUT_REQUIRED_RULE = REQUIRED_RULE();
//
export const MOBILE_LENGTH_RULE = LENGTH_RULE(11);
// 名称类
export const NAME_LENGTH_RULE = MIN_MAX_RULE(2, 32);
// 密码类
export const PWD_LENGTH_RULE = MIN_MAX_RULE(6, 32);
//
export const IP_LENGTH_RULE = MIN_MAX_RULE(1, 46);
//
export const EMAIL_TYPE_RULE = EMAIL_RULE();
//
export const CODE_LENGTH_RULE = MIN_MAX_RULE(3, 50);
//
export const IMAGE_LENGTH_RULE = MIN_MAX_RULE(1, 200);
//
export const DESC_LENGTH_RULE = MIN_MAX_RULE(1, 100);
//
export const SHOW_LENGTH_RULE = MIN_MAX_RULE(1, 5000);
//
export const TEXT_LENGTH_RULE = MIN_MAX_RULE(1, 10000);
