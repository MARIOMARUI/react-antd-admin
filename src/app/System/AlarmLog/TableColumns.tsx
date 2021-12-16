/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-10 18:18:57
 * @LastEditTime: 2021-10-27 16:54:39
 */
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
import { MODULE_NAME, TABLE_ROW_KEY } from "./config";
// script & methods & public
// store
import { state } from "./state";
// controller
import { delCompany } from "./controller";
import { getAreaText } from "biz/area/logic";
// interface && type
// 其它

const TableColumns = [
  {
    title: "编号",
    key: "id",
    dataIndex: TABLE_ROW_KEY,
  },
  {
    title: "公司名称",
    key: "companyName",
    dataIndex: "companyName",
  },
  {
    title: "地址",
    key: "address",
    render: (el: Supplier) => {
      const info = getAreaText(el);
      return `${info.text} ${el.address}`;
    },
  },
  {
    title: "经营区域",
    dataIndex: "regionName",
  },
  {
    title: "备注",
    key: "remark",
    dataIndex: "remark",
  },
  {
    title: "创建时间",
    key: "gmtCreate",
    dataIndex: "gmtCreate",
  },
  {
    title: "Action",
    key: "action",
    render: (el: Company) => {
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delCompany(el.companyId);
      };

      return (
        <Space>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>
          <Popconfirm
            title={`确定删除${MODULE_NAME} ${el.companyName}?`}
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
