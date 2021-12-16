/**
 * @Date 2020-10-26 16:31:24
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Form, Table, Button, Input, Space, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// components & widget
import SearchForm from "cts/SearchForm";
import TableColumns from "./TableColumns";
import EditModal from "./EditModal";
import RoleModal from "./RoleModal";
// style
// config
import { TABLE_PAGINATION } from "project/config";
import { TABLE_ROW_KEY } from "./config";
// script & methods & public
// store
import { observer } from "mobx-react";
import { SearchValue, state } from "./state";
// controller
import { didMount, getAdminPage } from "./controller";
import { getAdminAccountTypeService } from "biz/admin/service";
// interface && type && class
// 其它

function ActionArea() {
  const [form] = Form.useForm<SearchValue>();
  const [typeList, setTypeList] = useState<Dict[]>([]);

  const getAdminAccountType = async () => {
    setTypeList([]);
    // 调用服务
    const r1 = await getAdminAccountTypeService();
    // 成功
    if (!r1.payload) {
      return;
    }
    setTypeList(r1.payload);
  };

  const search = async () => {
    const result = form.getFieldsValue();
    state.setSearch(result);
    state.setPage();
    await getAdminPage();
  };

  const resetSearch = async () => {
    form.resetFields();
    state.setSearch();
    state.setPage();
    await getAdminPage();
  };

  useEffect(() => {
    getAdminAccountType();
    return () => {
      // cleanup
    };
  }, []);

  return (
    <>
      <Form {...SearchForm.FORM_PROPS} form={form}>
        <SearchForm.Row>
          <SearchForm.Col>
            <Form.Item label="用户名" name="userName">
              <Input placeholder="请输入用户名" />
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="手机号" name="mobile">
              <Input placeholder="请输入手机号" />
            </Form.Item>
          </SearchForm.Col>
          <SearchForm.Col>
            <Form.Item label="账户类型" name="accountTypeEnum">
              <Select placeholder="请选择账户类型">
                {typeList.map((el) => (
                  <Select.Option key={el.statusCode} value={el.statusCode}>
                    {el.value}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </SearchForm.Col>
        </SearchForm.Row>
        <SearchForm.Action search={search} reset={resetSearch} />
      </Form>
      <Space>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            state.setEditModal(true);
          }}
        >
          添加
        </Button>
      </Space>
    </>
  );
}

function AdminList() {
  useEffect(() => {
    didMount();
    return () => {
      //
    };
  }, []);

  const data = state.getList();

  const change = (page: number, size?: number) => {
    state.setPage(page);
    state.setSize(size);
    getAdminPage();
  };

  const pagination = {
    ...TABLE_PAGINATION,
    total: state.total,
    current: state.page,
    pageSize: state.size,
    onShowSizeChange: change,
    onChange: change,
  };

  return (
    <div className="main-content">
      <ActionArea />
      <Table
        className="main-table"
        columns={TableColumns}
        loading={state.loading}
        pagination={pagination}
        dataSource={data}
        scroll={{ x: "max-content" }}
        rowKey={TABLE_ROW_KEY}
      />
      <EditModal />
      <RoleModal />
    </div>
  );
}

export default observer(AdminList);
