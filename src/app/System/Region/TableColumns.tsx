/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-27 16:13:15
 * @LastEditTime: 2021-10-27 17:00:49
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
import { delRegion } from "./controller";
import { ColumnsType } from "antd/lib/table";
// interface && type
// 其它

const TableColumns: ColumnsType<RegionDto> = [
  {
    title: "编号",
    dataIndex: TABLE_ROW_KEY,
    align: "center",
  },
  {
    title: "区域名称",
    dataIndex: "regionName",
    align: "center",
  },
  {
    title: "备注",
    dataIndex: "remark",
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: (el: Region) => {
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delRegion(el.regionId);
      };

      return (
        <Space>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>
          <Popconfirm
            title={`确定删除${MODULE_NAME} ${el.regionName}?`}
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
