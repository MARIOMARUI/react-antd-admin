/**
 * @Date 2020-06-23 10:13:58
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Redirect } from "react-router";
import { Layout, BackTop } from "antd";
// components & widget
import { VersionShow } from "./widget";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import RoutesView from "./RoutesView";
import PwdModal from "./PwdModal";
import InfoModal from "./InfoModal";
import RoutesTagGroup from "./RoutesTagGroup";
// style
import "./index.less";
// config
// script & methods & public
// store
import { observer } from "mobx-react";
import { appState, userState } from "state/global";
// controller
import { init } from "./controller";
// interface && type
// 其它

const { Content } = Layout;
const { Sider } = Layout;

function Main() {
  // props && state
  const { collapsed } = appState;

  useEffect(() => {
    init();
    return () => {
      //
    };
  }, []);

  // 根据状态自动重定向
  if (!userState.isLogin()) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout
      style={{
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Sider className="sider" width={200} breakpoint="lg" collapsed={collapsed}>
        <VersionShow collapsed={collapsed} />
        <AdminMenu />
      </Sider>
      <Layout>
        <AdminHeader />
        <RoutesTagGroup />
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 10px 10px 10px",
          }}
        >
          <RoutesView />
        </Content>
      </Layout>
      <PwdModal />
      <InfoModal />
      <BackTop visibilityHeight={100} />
    </Layout>
  );
}

export default observer(Main);
