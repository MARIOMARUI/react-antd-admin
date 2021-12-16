/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-08 09:13:43
 * @LastEditTime: 2021-11-12 14:41:03
 */
import { Tabs } from "antd";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import AlarmCombination from "./AlarmCombination";
import { didMount } from "./controller";
import Other from "./Other";
import ProtectivePlate from "./ProtectivePlate";

function GiveAnAlarm() {
  useEffect(() => {
    didMount();
    return () => {
      //
    };
  }, []);
  const { TabPane } = Tabs;
  return (
    <div style={{ backgroundColor: "#fff", padding: 30, paddingBottom: 10 }}>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="保护板原始状态" key="1">
          <ProtectivePlate />
        </TabPane>
        <TabPane tab="报警组合状态" key="2">
          <AlarmCombination />
        </TabPane>
        <TabPane tab="其他" key="3">
          <Other />
        </TabPane>
      </Tabs>
    </div>
  );
}
export default observer(GiveAnAlarm);
