/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-11-01 11:46:54
 */
/**
 * @Date 2020-08-24 10:35:08
 * @Remark
 */

// react
// lib
import { DashboardOutlined } from "@ant-design/icons";
// model & interface
// 仪表盘
import Dashboard from "app/Dashboard";
// 模块
// import user from "./user";
import system from "./system";
// 其它
import { completePath } from "../format";

/**
 * 配置
 * 基本都进行延迟加载
 */
const appMenus: RouteComponent[] = [
  {
    name: "Dashboard",
    icon: DashboardOutlined,
    path: completePath(),
    component: Dashboard,
  },
  // user,
  system,
];

export default appMenus;
