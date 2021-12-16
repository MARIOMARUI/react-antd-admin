/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-12 15:01:54
 * @LastEditTime: 2021-11-12 15:25:54
 */

import { simplePageService } from "public/service/simple.service";
import { AlarmLogPage, API_ALARM_LOG_PAGE, ReqAlarmLogPage, ResAlarmLogPage } from "./api";

/**
 * @description 报警日志分页
 * @param params
 * @returns
 */
export async function getAlarmLogPageService(params:ReqAlarmLogPage) {
    return simplePageService<ReqAlarmLogPage, ResAlarmLogPage, AlarmLogPage>(
        API_ALARM_LOG_PAGE,
        params,
      );
}
