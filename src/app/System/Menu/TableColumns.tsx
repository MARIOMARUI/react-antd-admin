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
// store
import { state } from "./state";
// controller
import { delMenu } from "./controller";
// interface && type
// 其它

const TableColumns = [
  {
    title: "编号",
    key: "id",
    dataIndex: "id",
  },
  {
    title: "菜单名称",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "URI",
    key: "uri",
    dataIndex: "uri",
  },
  {
    title: "上级菜单",
    key: "parentTitle",
    dataIndex: "parentTitle",
  },
  {
    title: "Action",
    key: "action",
    render: (el: AppMenuDto) => {
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delMenu(el.id);
      };
      return (
        <Space>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>
          <Popconfirm
            title={`确定删除${MODULE_NAME} ${el.title}?`}
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
