/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-03 10:48:26
 * @LastEditTime: 2021-11-12 14:12:08
 */
import React from "react";
import { observer } from "mobx-react";
import { state } from "./state";
import { Button, Form, Input, InputNumber, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { INPUT_REQUIRED_RULE } from "project/validRules";
import {
  addProtectivePlateListController,
  delProtectivePlateListController,
} from "./controller";
import { ProtectivePlateList } from "biz/giveAnAlarm/api";

const TableColumns: ColumnsType<ProtectivePlateList> = [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "状态码",
    dataIndex: "statusCode",
    align: "center",
  },
  {
    title: "状态值",
    dataIndex: "statusValue",
    align: "center",
  },
  {
    title: "操作",
    key: "",
    align: "center",
    render: (value, { protectionBoardStatusId }) => {
      const del = () => {
        delProtectivePlateListController({
          protectionBoardStatusId,
        });
      };
      return (
        <Button type="link" onClick={del}>
          删除
        </Button>
      );
    },
  },
];

/* 保护板 */
function ProtectivePlate() {
  const [form] = Form.useForm();

  const Add = async () => {
    try {
      const result = await form.validateFields();
      addProtectivePlateListController(result);
    } catch (error) {
      //
    }
  };
  return (
    <>
      <Form layout="inline" form={form}>
        <Form.Item
          name="statusCode"
          label="保护板状态码"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <InputNumber placeholder="请输入状态码" className="mf-input-full" />
        </Form.Item>
        <Form.Item
          name="statusValue"
          label="保护状态值"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input placeholder="请输入状态值" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={Add}>
            添加
          </Button>
        </Form.Item>
      </Form>
      <Table
        loading={state.loading}
        className="mt-10"
        columns={TableColumns}
        pagination={false}
        dataSource={state.getProtectivePlateList}
        rowKey="id"
      />
    </>
  );
}

export default observer(ProtectivePlate);
