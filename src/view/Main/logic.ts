/**
 * @Date 2021-06-16 15:14:25
 * @Remark
 */

// lib
import screenfull from "screenfull";
// 其它

export function getScreenfull(): screenfull.Screenfull | undefined {
  const sc = screenfull;
  if (sc.isEnabled) {
    return sc;
  }
  return undefined;
}

export function nicknameFormat(nickname: string) {
  if (nickname.length > 15) {
    return `${nickname.slice(0, 15)}...`;
  }
  return nickname;
}
