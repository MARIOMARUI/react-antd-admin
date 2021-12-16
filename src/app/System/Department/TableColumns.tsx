/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-27 18:48:31
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
import { MODULE_NAME } from "./config";
// script & methods & public
// store
import { state } from "./state";
// controller
import { delDepartment } from "./controller";
// interface && type
// 其它

const TableColumns = [
  {
    title: "编号",
    key: "deptId",
    dataIndex: "deptId",
  },
  {
    title: "部门名称",
    key: "deptName",
    dataIndex: "deptName",
  },
  {
    title: "部门电话",
    key: "departmentPhone",
    dataIndex: "departmentPhone",
  },
  // {
  //   title: "负责人",
  //   key: "user",
  //   render: (el: Department) => {
  //     return el.personInChargeUser?.userName;
  //   },
  // },
  // {
  //   title: "负责人电话",
  //   key: "userMobile",
  //   render: (el: Department) => {
  //     return el.personInChargeUser?.mobile;
  //   },
  // },
  {
    title: "上级部门",
    key: "top",
    render: (el: Department) => {
      const dep = el.pdept;
      return dep?.deptName;
    },
  },
  {
    title: "备注",
    key: "remark",
    dataIndex: "remark",
  },
  {
    title: "Action",
    key: "action",
    render: (el: Department) => {
      const { deptName } = el;
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delDepartment(el.deptId);
      };
      return (
        <Space>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>
          <Popconfirm
            title={`确定删除${MODULE_NAME} ${deptName}?`}
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
