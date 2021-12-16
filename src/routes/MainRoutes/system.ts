/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-11-12 14:39:55
 */
/**
 * @Date 2021-06-11 16:24:33
 * @Remark
 */

// react
import { lazy } from "react";
// lib
import { SettingOutlined } from "@ant-design/icons";
// config
// model & interface
// 其它
import { completePath } from "../format";

const routeModule: RouteComponent = {
  name: "系统管理",
  icon: SettingOutlined,
  path: completePath("system"),
  component: null,
  sub: [
    {
      name: "账号管理",
      path: completePath("system/admin"),
      component: lazy(() => import("../../app/System/Admin")),
    },
    {
      name: "区域管理",
      path: completePath("system/region"),
      component: lazy(() => import("../../app/System/Region")),
    },
    {
      name: "公司管理",
      path: completePath("system/company"),
      component: lazy(() => import("../../app/System/Company")),
    },
    {
      name: "部门管理",
      path: completePath("system/department"),
      component: lazy(() => import("../../app/System/Department")),
    },
    {
      name: "角色管理",
      path: completePath("system/role"),
      component: lazy(() => import("../../app/System/Role")),
    },
    {
      name: "菜单管理",
      path: completePath("system/menu"),
      component: lazy(() => import("../../app/System/Menu")),
    },
    {
      name: "权限管理",
      path: completePath("system/perm"),
      component: lazy(() => import("../../app/System/Permission")),
    },
    {
      name: "报警设置",
      path: completePath("system/giveAnAlarm"),
      component: lazy(() => import("../../app/System/GiveAnAlarm")),
    },
    {
      name: "报警日志",
      path: completePath("system/alarmLog"),
      component: lazy(() => import("../../app/System/AlarmLog")),
    },
  ],
};

export default routeModule;
