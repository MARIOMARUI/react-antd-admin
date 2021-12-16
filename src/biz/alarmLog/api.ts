/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-12 15:02:01
 * @LastEditTime: 2021-11-12 15:47:44
 */
export interface AlarmLogPage {
  userId: string;
}

// API -------------------------------------------------------------

export const API_ALARM_LOG_PAGE: Api = {
  title: "报警日志列表",
  path: "alarm_log/list",
  method: "POST",
  prefix: "li_dian",
  remark: "报警日志列表",
};

// req
export interface ReqAlarmLogPage extends ReqPage {
  equipmentNum?: string;
  status?: string;
  level?: string;
  isDelete: number;
}

// res
export type ResAlarmLogPage = ResPage<AlarmLogPage>;
