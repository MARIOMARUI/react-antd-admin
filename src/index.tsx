/**
 * @Date 2021-06-10 15:01:39
 * @Remark
 */

// react
import React from "react";
import ReactDOM from "react-dom";
// lib
import { ConfigProvider } from "antd";
import moment from "moment";
import NP from "number-precision";
// components & widget
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// 国际化
import "moment/locale/zh-cn";
import locale from "antd/lib/locale/zh_CN";
// style
import "style/maria.less";
// config
import { APP_MODE } from "config/env";
// script & methods & public
import logUtils from "utils/logUtils";
// state
import { initUserState } from "state/global";
// 其它

NP.enableBoundaryChecking(false);

// render函数
function run() {
  logUtils.console.log(`APP处于${APP_MODE}模式运行`);

  moment.locale("zh-cn");

  initUserState();

  ReactDOM.render(
    <ConfigProvider locale={locale}>
      <App />
    </ConfigProvider>,
    document.getElementById("root"),
  );
}
// app run
run();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
