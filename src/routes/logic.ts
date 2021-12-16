/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-26 14:00:24
 */
/**
 * @Date 2020-06-23 11:49:30
 * @Remark
 */

//
import { v4 as uuidv4 } from "uuid";
// config
// 路由
import MainRoutes from "./MainRoutes";
// 其它
import { getCodeFromPath } from "./format";

function getMenuFromRoute(item: RouteComponent) {
  const result: RouteMenu = {
    id: uuidv4(),
    name: item.name,
    icon: item.icon,
    code: getCodeFromPath(item.path),
    path: item.path,
    hidden: item.hidden,
  };
  return result;
}

// 获得菜单树,形成菜单
export function getAllMenuTreeFromRoutes() {
  const loop = (list: RouteComponent[]): RouteMenu[] => {
    const result = list.map((el) => {
      const item: RouteMenu = getMenuFromRoute(el);
      if (el.sub && el.sub.length > 0) {
        const subList = loop(el.sub);
        item.sub = subList;
      }
      return item;
    });
    return result;
  };
  const tree = loop(MainRoutes);
  return tree;
}

// 获得菜单列表
export function getAllMenuListFromRoutes() {
  const result: RouteMenu[] = [];
  const loop = (list: RouteComponent[]) => {
    list.forEach((el) => {
      result.push(getMenuFromRoute(el));
      if (el.sub && el.sub.length > 0) {
        loop(el.sub);
      }
    });
  };
  loop(MainRoutes);
  return result;
}

// 使用pathname获得对应的menu
export function getMenuByPath(path: string) {
  const code: string = getCodeFromPath(path);
  const menu = getAllMenuListFromRoutes().find((el) => el.code === code);
  return menu;
}

// 获得路由组件列表,渲染视图
export function getRouteComponentList() {
  const result: RouteComponent[] = [];
  const loop = (list: RouteComponent[]) => {
    list.forEach((el) => {
      result.push({
        ...el,
        code: getCodeFromPath(el.path),
      });
      if (el.sub && el.sub.length > 0) {
        loop(el.sub);
      }
    });
  };
  loop(MainRoutes);
  return result;
}
