/**
 * @Date 2020-10-26 16:31:24
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// components & widget
import TableColumns from "./TableColumns";
import EditModal from "./EditModal";
// style
// config
import { TABLE_ROW_KEY } from "./config";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
// controller
import { didMount } from "./controller";
// interface && type && class
// 其它

function ActionArea() {
  return (
    <>
      <div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            state.setEditModal(true);
          }}
        >
          添加
        </Button>
      </div>
    </>
  );
}

function DepartmentList() {
  useEffect(() => {
    didMount();
    return () => {
      //
    };
  }, []);

  const data = state.getList();

  return (
    <div className="main-content">
      <ActionArea />
      <Table
        className="main-table"
        columns={TableColumns}
        loading={state.loading}
        pagination={false}
        dataSource={data}
        rowKey={TABLE_ROW_KEY}
      />
      <EditModal />
    </div>
  );
}

export default observer(DepartmentList);
