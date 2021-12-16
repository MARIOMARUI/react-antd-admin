/**
 * @Date 2021-06-16 15:51:10
 * @Remark block1
 */

// lib
import AES from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";
// config
import { APP_SETTING } from "config/setting";
// interface && type

/**
 * 加密
 */
function encrypt<T>(data: T): string {
  const bytes = AES.encrypt(JSON.stringify(data), APP_SETTING.APP_ID);
  return bytes.toString();
}

/**
 * 解密
 */
function decrypt<T>(data: string): T {
  const bytes = AES.decrypt(data, APP_SETTING.APP_ID);
  return JSON.parse(enc.stringify(bytes));
}

export default {
  encrypt,
  decrypt,
};
