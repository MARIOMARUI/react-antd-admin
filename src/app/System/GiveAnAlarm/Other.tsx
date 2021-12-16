/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-03 10:48:26
 * @LastEditTime: 2021-11-12 14:15:27
 */
import React from "react";
import { observer } from "mobx-react";
import { state } from "./state";
import { Button, Form, Input, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { INPUT_REQUIRED_RULE } from "project/validRules";
import {
  addGiveAnAlarmLevelListController,
  addProcessingStatusListController,
  delGiveAnAlarmLevelListController,
  delProcessingStatusListController,
} from "./controller";
import {
  GiveAnAlarmLevelList,
  ProcessingStatusList,
} from "biz/giveAnAlarm/api";

const TableColumns1: ColumnsType<GiveAnAlarmLevelList> = [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "报警等级名称",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "描述",
    dataIndex: "description",
    align: "center",
  },
  {
    title: "操作",
    key: "",
    align: "center",
    render: (value, { alarmLevelId }) => {
      const del = () => {
        delGiveAnAlarmLevelListController({
          alarmLevelId,
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
const TableColumns2: ColumnsType<ProcessingStatusList> = [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "报警处理状态名称",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "描述",
    dataIndex: "description",
    align: "center",
  },
  {
    title: "操作",
    key: "",
    align: "center",
    render: (value, { alarmProcessingStatusId }) => {
      const del = () => {
        delProcessingStatusListController({
          alarmProcessingStatusId,
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
  const [form1] = Form.useForm();
  const [form2] = Form.useForm();

  const Add1 = async () => {
    try {
      const result = await form1.validateFields();
      addGiveAnAlarmLevelListController(result);
    } catch (error) {
      //
    }
  };
  const Add2 = async () => {
    try {
      const result = await form2.validateFields();
      addProcessingStatusListController(result);
    } catch (error) {
      //
    }
  };
  return (
    <>
      <Form layout="inline" form={form1}>
        <Form.Item
          name="name"
          label="等级名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input
            placeholder="请输入等级名称"
            className="mf-input-full"
            max={20}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="描述"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input placeholder="请输入描述" max={50} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={Add1}>
            添加
          </Button>
        </Form.Item>
      </Form>
      <Table
        loading={state.loading}
        className="mt-10"
        columns={TableColumns1}
        pagination={false}
        dataSource={state.getGiveAnAlarmLevelList}
        rowKey="id"
      />

      <Form layout="inline" form={form2} className="mt-30">
        <Form.Item
          name="name"
          label="处理状态名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input
            placeholder="请输入处理状态名称"
            className="mf-input-full"
            max={20}
          />
        </Form.Item>
        <Form.Item
          name="description"
          label="描述"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input placeholder="请输入描述" max={50} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={Add2}>
            添加
          </Button>
        </Form.Item>
      </Form>
      <Table
        loading={state.loading2}
        className="mt-10"
        columns={TableColumns2}
        pagination={false}
        dataSource={state.getProcessingStatusList}
        rowKey="id"
      />
    </>
  );
}

export default observer(ProtectivePlate);
