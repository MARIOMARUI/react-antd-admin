/**
 * @Date 2021-01-04 17:59:55
 * @Remark
 */

import { APP_SETTING } from "config/setting";

/**
 * 设置浏览器头部标题
 */
function setTitle(title?: string) {
  const mTitle = title
    ? `${title} - ${APP_SETTING.APP_NAME}`
    : APP_SETTING.APP_NAME;
  window.document.title = mTitle;
}

export default {
  setTitle,
};
