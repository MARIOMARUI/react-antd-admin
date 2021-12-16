/**
 * @Date 2019-10-08 17:06:24
 * @Remark
 */

export interface IRule {
  field: string;
  fullField: string;
  type: string;
}

// 验证身份证
export function verifyIdentityNo(rule: IRule, value: any, callback: any) {
  const val: string = value;
  const reg =
    /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;
  const result = reg.test(val);
  if (val.length === 0 || result) {
    callback();
  } else {
    callback("不是合法的身份证号");
  }
}

// 验证内地手机号
export function isMobile(value: string) {
  const reg =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;
  const result = reg.test(value);
  return result;
}

// 验证内地手机号
export function verifyMobile(rule: any, value: any) {
  const val: string | undefined = value;
  if (!val) {
    return Promise.resolve();
  }
  const result = isMobile(val);
  if (val.length === 0 || result) {
    return Promise.resolve();
  }
  return Promise.reject(new Error("不是合法的手机号码"));
}

export const REQUIRED_RULE = (name?: string) => ({
  required: true,
  message: name || "该字段为必须字段",
});

export const MIN_MAX_RULE = (min: number, max: number) => ({
  min,
  max,
  message: `${min}至${max}个字符之间`,
});

export const LENGTH_RULE = (len: number) => ({
  len,
  message: `应为${len}个字符`,
});

export const EMAIL_RULE = (name = "该字段") => ({
  type: "email",
  message: `${name}必须是电子邮箱`,
});
