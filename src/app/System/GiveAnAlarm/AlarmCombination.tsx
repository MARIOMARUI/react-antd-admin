/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-03 10:48:26
 * @LastEditTime: 2021-11-12 17:12:13
 */
import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { state } from "./state";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Space,
  Table,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import { INPUT_REQUIRED_RULE } from "project/validRules";
import {
  addAlarmCombinationListController,
  delAlarmCombinationListController,
} from "./controller";
import { AlarmCombinationList } from "biz/giveAnAlarm/api";
import SearchForm from "cts/SearchForm";
import { PlusOutlined } from "@ant-design/icons";
import { dictState } from "state/global";

const TableColumns: ColumnsType<AlarmCombinationList> = [
  {
    title: "ID",
    dataIndex: "id",
    align: "center",
  },
  {
    title: "报警名称",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "状态码",
    dataIndex: "combinationStatusCode",
    align: "center",
  },
  {
    title: "状态值",
    dataIndex: "combinationStatusValue",
    align: "center",
  },
  {
    title: " 内容",
    dataIndex: "content",
    align: "center",
  },
  {
    title: "是否允许人工解除",
    dataIndex: "manualRelease",
    align: "center",
    render: (v: boolean) => <span>{v ? "是" : "否"}</span>,
  },
  {
    title: "等级",
    dataIndex: "alarmLevel",
    align: "center",
  },
  {
    title: "间隔",
    dataIndex: "alarmInterval",
    align: "center",
  },
  {
    title: "通知对象",
    dataIndex: "alarmObject",
    align: "center",
  },
  {
    title: "通知类型",
    dataIndex: "alarmType",
    align: "center",
  },
  {
    title: "其他号码",
    dataIndex: "mobiles",
    align: "center",
  },
  {
    title: "操作",
    key: "",
    align: "center",
    render: (value, { alarmCombinationStatusId }) => {
      const del = () => {
        delAlarmCombinationListController({
          alarmCombinationStatusId,
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

function ActionArea() {
  const [form] = Form.useForm<any>();
  const { getProtectivePlateList, getGiveAnAlarmLevelList } = state;
  const Add = async () => {
    try {
      const result = await form.validateFields();
      addAlarmCombinationListController({
        ...result,
        alarmObject: result.alarmObject.join("/"),
        alarmType: result.alarmType.join("/"),
      });
    } catch (e) {
      //
    }
  };

  // 数据变动重置表单
  useEffect(() => {
    return () => {
      form.resetFields();
    };
  }, [form, getProtectivePlateList, getGiveAnAlarmLevelList]);

  return (
    <>
      <Form {...SearchForm.FORM_PROPS} form={form}>
        <SearchForm.Row>
          <SearchForm.Col>
            <Form.Item
              label="报警名称"
              name="name"
              rules={[INPUT_REQUIRED_RULE]}
            >
              <Input placeholder="请输入报警名称" />
            </Form.Item>
          </SearchForm.Col>

          <SearchForm.Col>
            <Form.Item
              label="保护板原始状态"
              name="ids"
              rules={[INPUT_REQUIRED_RULE]}
            >
              <Select mode="multiple" placeholder="请选择保护板原始状态">
                {state.getProtectivePlateList.map((el) => (
                  <Select.Option
                    key={el.protectionBoardStatusId}
                    value={el.protectionBoardStatusId}
                  >
                    {el.statusCode}
                    -
                    {el.statusValue}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item
              label="内容"
              name="content"
              rules={[INPUT_REQUIRED_RULE]}
            >
              <Input placeholder="请输入内容" />
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item
              label="严重等级"
              name="alarmLevel"
              rules={[INPUT_REQUIRED_RULE]}
            >
              <Select placeholder="请选择严重等级">
                {state.getGiveAnAlarmLevelList.map((el) => (
                  <Select.Option key={el.alarmLevelId} value={el.name}>
                    {el.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="允许人工解除" name="manualRelease">
              <Radio.Group>
                <Radio value={1}>允许</Radio>
                <Radio value={0}>不允许</Radio>
              </Radio.Group>
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="报警间隔（分）" name="alarmInterval">
              <InputNumber min={0} className="mf-input-full" />
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="报警对象" name="alarmObject">
              <Checkbox.Group>
                {dictState.alarmObjectList.map((i) => (
                  <Checkbox key={i.statusCode} value={i.statusCode}>
                    {i.value}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="报警类型" name="alarmType">
              <Checkbox.Group>
                {dictState.alarmTypeList.map((i) => (
                  <Checkbox key={i.statusCode} value={i.statusCode}>
                    {i.value}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="其他号码" name="mobiles">
              <Input.TextArea
                placeholder="请输入其他号码（以“/”分割）"
                rows={4}
              />
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label=" ">
              <Button type="primary" icon={<PlusOutlined />} onClick={Add}>
                添加
              </Button>
            </Form.Item>
          </SearchForm.Col>
        </SearchForm.Row>
      </Form>
      <Space />
    </>
  );
}

/* 报警组合 */
function AlarmCombination() {
  const { getProtectivePlateList, getGiveAnAlarmLevelList } = state;

  // 数据变动刷新下拉列表
  useEffect(() => {
    return () => {};
  }, [getProtectivePlateList, getGiveAnAlarmLevelList]);
  return (
    <>
      <ActionArea />
      <Table
        loading={state.loading}
        className="mt-10"
        columns={TableColumns}
        pagination={false}
        dataSource={state.getAlarmCombinationList}
        rowKey="id"
      />
    </>
  );
}

export default observer(AlarmCombination);
