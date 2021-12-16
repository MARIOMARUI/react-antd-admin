/**
 * @Date 2020-06-23 10:45:07
 * @Remark
 */

// react
import React, { useEffect, useCallback } from "react";
// lib
import { Layout, Menu, Modal } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ArrowsAltOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
// components & widget
import UserAvatar from "cts/UserAvatar";
// style
// config
// script & methods & public
// store
import { observer } from "mobx-react";
import { appState, userState } from "state/global";
// controller
import { getScreenfull, nicknameFormat } from "./logic";
import { logoutService } from "biz/auth/service";
// interface && type
// 其它

const { Header } = Layout;
const { SubMenu } = Menu;
const MenuItemGroup = Menu.ItemGroup;
const { confirm } = Modal;

function AdminHeader() {
  // props && state
  const { collapsed, isFull } = appState;
  const account = userState.getAccount();

  const sc = getScreenfull();

  const setScreenFull = () => {
    if (sc) {
      sc.toggle();
    }
  };

  const screenChangeCallback = useCallback(() => {
    if (sc) {
      appState.setFull(sc.isFullscreen);
    }
  }, [sc]);

  const logout = () => {
    confirm({
      title: `当前账户${account.userName}确认注销退出系统？`,
      onOk() {
        logoutService();
      },
    });
  };

  const clearLocalData = () => {
    confirm({
      title: "清除本地数据的同时会退出系统",
      onOk() {
        logoutService();
      },
    });
  };

  useEffect(() => {
    if (sc) {
      sc.on("change", screenChangeCallback);
    }
    return () => {
      if (sc) {
        sc.off("change", screenChangeCallback);
      }
    };
  }, [sc, screenChangeCallback]);

  const nickname = nicknameFormat(account.userName);

  const collapsedHandler = () => {
    appState.collapsedChange();
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {collapsed ? (
        <MenuUnfoldOutlined
          className="header-trigger"
          onClick={collapsedHandler}
        />
      ) : (
        <MenuFoldOutlined
          className="header-trigger"
          onClick={collapsedHandler}
        />
      )}
      <div className="flex-center">
        {isFull ? (
          <ShrinkOutlined className="header-trigger" onClick={setScreenFull} />
        ) : (
          <ArrowsAltOutlined
            className="header-trigger"
            onClick={setScreenFull}
          />
        )}
        <Menu mode="horizontal" className="header-menu">
          <SubMenu
            key="hm"
            title={
              <div className="flex-center">
                <UserAvatar src={account.avatarUrl || ""} />
                <span className="ml-10">{nickname || "GUEST"}</span>
              </div>
            }
          >
            <MenuItemGroup title="登录用户" key="hm-1">
              <Menu.Item key="welcome">{`${account.userName}`}</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="系统操作" key="hm-2">
              <Menu.Item key="clean" onClick={clearLocalData}>
                <span>清除本地数据</span>
              </Menu.Item>
              <Menu.Item
                key="pwd"
                onClick={() => {
                  // state.pwdModal = true;
                }}
              >
                <span>修改登录密码</span>
              </Menu.Item>
              <Menu.Item
                key="info"
                onClick={() => {
                  // state.infoModal = true;
                }}
              >
                <span>修改我的信息</span>
              </Menu.Item>
              <Menu.Item key="logout" onClick={logout}>
                <span>退出登录</span>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
}

export default observer(AdminHeader);
