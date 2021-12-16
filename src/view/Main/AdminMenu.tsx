/**
 * @Date 2020-06-23 11:36:40
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// lib
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
// components & widget
// style
// config
import { ROOT_ADMIN_USER_ID, ROUTE_MODE } from "project/config";
// script & methods & public
import logUtils from "utils/logUtils";
// state
import { observer } from "mobx-react";
import { appState, userState } from "state/global";
// controller
import { getAllMenuTreeFromRoutes } from "routes/logic";
// interface && type
// 其它

function createMenu(menu: RouteMenu[], accessList: AppMenu[]): RouteMenu[] {
  const list: RouteMenu[] = [];
  menu.forEach((el) => {
    const access = accessList.find((item) => item.uri === el.path);
    if (access) {
      const me: RouteMenu = {
        id: access.id, // 使用后台生成的id
        name: access.title, // 使用后台的name
        icon: el.icon, // 后台不设置icon
        code: el.code, // 后台有code字段但是暂不使用
        path: access.uri, // 使用前台的uri
        sub: [],
        hidden: el.hidden,
      };
      if (el.sub && el.sub.length > 0) {
        const sub = createMenu(el.sub, accessList);
        me.sub = sub;
      }
      list.push(me);
    }
  });
  return list;
}

const renderMenuItem = (list: RouteMenu[]) => {
  const result = list.map((el) => {
    const MenuIcon = el.icon || MenuOutlined;

    if (!el.sub || (el.sub && el.sub.length === 0)) {
      return (
        <Menu.Item key={el.code}>
          <Link to={el.path}>
            <MenuIcon />
            <span>{el.name}</span>
          </Link>
        </Menu.Item>
      );
    }
    if (el.sub && el.sub.length > 0) {
      return (
        <Menu.SubMenu
          key={el.code}
          icon={<MenuIcon />}
          title={<span>{el.name}</span>}
        >
          {el.sub
            .filter((it) => !it.hidden)
            .map((item) => (
              <Menu.Item key={item.code}>
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </Menu.Item>
            ))}
        </Menu.SubMenu>
      );
    }
    return null;
  });
  return result;
};

function AdminMenu() {
  // props && state
  const account = userState.getAccount();
  const open = appState.getOpen();
  const selected = appState.getSelected();

  const [menu, setMenu] = useState<RouteMenu[]>([]);

  useEffect(() => {
    let menuTree = getAllMenuTreeFromRoutes();
    if (ROUTE_MODE === "static") {
      logUtils.info("可访问全部菜单", menuTree);
    }
    if (ROUTE_MODE === "dynamic" && account.userId !== ROOT_ADMIN_USER_ID) {
      menuTree = createMenu(menuTree, userState.getAccount().menuList);
      logUtils.info("账户可访问菜单", menuTree);
    }
    setMenu(menuTree);
    return () => {
      //
    };
  }, [account.userId]);

  const onOpenChange = (openKeys: any) => {
    // logUtils.info("Menu Change", openKeys);
    appState.setOpen(openKeys);
  };
  const onClick = (cp: any) => {
    // logUtils.info("Menu Click", cp.keyPath);
    appState.setSelected(cp.keyPath);
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      onOpenChange={onOpenChange}
      onClick={onClick}
      openKeys={open}
      selectedKeys={selected}
    >
      {renderMenuItem(menu)}
    </Menu>
  );
}

export default observer(AdminMenu);
