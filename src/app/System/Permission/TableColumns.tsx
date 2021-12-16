/**
 * @Date 2021-06-21 10:03:49
 * @Remark
 */

// react
import React from "react";
// lib
import { Space, Button, Popconfirm } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "./config";
// script & methods & public
import { ADMIN_STATUS_DICT } from "public/constant";
// store
import { state } from "./state";
// controller
import { delPermission } from "./controller";
// interface && type
// 其它

const TableColumns = [
  {
    title: "编号",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "权限名称",
    key: "name",
    dataIndex: "name",
  },
  {
    title: "权限代码",
    key: "value",
    dataIndex: "value",
  },
  {
    title: "URI",
    key: "uri",
    dataIndex: "uri",
  },
  {
    title: "是否启用",
    key: "enable",
    render: (el: Permission) => ADMIN_STATUS_DICT[el.status],
  },
  {
    title: "创建时间",
    key: "gmtCreate",
    dataIndex: "gmtCreate",
  },
  {
    title: "Action",
    key: "action",
    render: (el: Permission) => {
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delPermission(el.id);
      };
      return (
        <Space>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>
          <Popconfirm
            title={`确定删除${MODULE_NAME} ${el.name}?`}
            onConfirm={del}
          >
            <Button size="small" type="link">
              删除
            </Button>
          </Popconfirm>
        </Space>
      );
    },
  },
];

export default TableColumns;
