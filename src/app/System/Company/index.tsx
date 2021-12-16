/**
 * @Date 2020-10-26 16:31:24
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Form, Table, Button, Input, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// components & widget
import SearchForm from "cts/SearchForm";
import TableColumns from "./TableColumns";
import EditModal from "./EditModal";
// style
// config
import { TABLE_PAGINATION } from "project/config";
import { TABLE_ROW_KEY } from "./config";
// script & methods & public
// store
import { observer } from "mobx-react";
import { SearchValue, state } from "./state";
// controller
import { didMount, getCompanyPage } from "./controller";
// interface && type && class
// 其它

function ActionArea() {
  const [form] = Form.useForm<SearchValue>();

  const search = async () => {
    const result = form.getFieldsValue();
    state.setSearch(result);
    state.setPage();
    await getCompanyPage();
  };

  const resetSearch = async () => {
    form.resetFields();
    state.setSearch();
    state.setPage();
    await getCompanyPage();
  };

  return (
    <>
      <Form {...SearchForm.FORM_PROPS} form={form}>
        <SearchForm.Row>
          <SearchForm.Col>
            <Form.Item label="公司名称" name="sName">
              <Input />
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
    getCompanyPage();
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
        rowKey={TABLE_ROW_KEY}
      />
      <EditModal />
    </div>
  );
}

export default observer(AdminList);
