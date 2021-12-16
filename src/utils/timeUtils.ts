/**
 * @Date 2021-06-11 11:17:00
 * @Remark
 */

import moment, { Moment } from "moment";

// 格式化时间
function format(
  time: Date | number | string | Moment | null | undefined = new Date(),
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 = 0,
): string {
  let pattern = "";
  switch (type) {
    case 0:
      pattern = "YYYY-MM-DD";
      break;
    case 1:
      pattern = "YYYY-MM-DD HH:mm:ss";
      break;
    case 2:
      pattern = "YYYY-MM";
      break;
    case 3:
      pattern = "YYYY";
      break;
    case 4:
      pattern = "YYYY-MM-DD HH:00:00";
      break;
    case 5:
      pattern = "HH:mm";
      break;
    case 6:
      pattern = "YYYY-MM-DD HH:mm";
      break;
    case 7:
      pattern = "YYYY-MM-DD 00:00:00";
      break;
    default:
      pattern = "YYYY-MM-DD";
      break;
  }
  if (moment.isMoment(time)) {
    return time.format(pattern);
  }
  return moment(time).format(pattern);
}

// 获得时间戳
function getUnixTime(time: Date | number = new Date()): number {
  return moment(time).unix();
}

export default {
  format,
  getUnixTime,
};
