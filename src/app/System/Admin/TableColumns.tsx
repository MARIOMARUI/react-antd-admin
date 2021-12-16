/**
 * @Date 2021-06-21 10:03:49
 * @Remark
 */

// react
import React from "react";
// lib
import { Space, Button, Popconfirm, Avatar } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "./config";
// script & methods & public
import {
  ACCOUNT_TYPE_DICT,
  ADMIN_STATUS_DICT,
  GENDER_DICT,
} from "public/constant";
// store
import { state } from "./state";
// controller
import { delAdmin } from "./controller";
import { showRoleModal } from "./RoleModal/controller";
import { dictState } from "state/global";
import { ColumnsType } from "antd/lib/table";
import { ROOT_ADMIN_ID } from "config/setting";
// interface && type
// 其它

const TableColumns: ColumnsType<Admin> = [
  {
    title: "编号",
    dataIndex: "userId",
    align: "center",
  },
  {
    title: "头像",
    align: "center",
    dataIndex: "avatarUrl",
    render: (v: string) => <Avatar src={v} />,
  },
  {
    title: "账户名称",
    dataIndex: "loginName",
    align: "center",
  },
  {
    title: "账户类型",
    dataIndex: "accountTypeEnum",
    align: "center",
    render: (v: string) => ACCOUNT_TYPE_DICT[v],
  },
  {
    title: "公司",
    dataIndex: "companyName",
    align: "center",
  },
  {
    title: "部门",
    dataIndex: "deptName",
    align: "center",
    render: (v: string) => <span>{v}</span>,
  },
  {
    title: "职位",
    dataIndex: "departmentOccupationEnum",
    align: "center",
    render: (v: string) => dictState?.departmentOccupationEnumMap[v]?.value,
  },
  {
    title: "用户名",
    dataIndex: "userName",
    align: "center",
  },
  {
    title: "用户手机号",
    dataIndex: "mobile",
    align: "center",
  },
  {
    title: "性别",
    dataIndex: "gender",
    align: "center",
    render: (v: number) => GENDER_DICT[v],
  },
  {
    title: "是否启用",
    dataIndex: "status",
    align: "center",
    render: (v: number) => ADMIN_STATUS_DICT[v],
  },
  {
    title: "创建时间",
    dataIndex: "gmtCreate",
    align: "center",
  },
  {
    title: "Action",
    align: "center",
    fixed: "right",
    render: (el: Admin) => {
      const edit = () => {
        state.setEditModal(el);
      };
      const del = () => {
        delAdmin(el.userId);
      };
      const role = () => {
        showRoleModal(el);
      };
      return (
        <Space>
          <Button size="small" type="link" onClick={role}>
            设置角色
          </Button>
          <Button size="small" type="link" onClick={edit}>
            编辑
          </Button>

          {el.userId !== ROOT_ADMIN_ID && (
            <Popconfirm
              title={`确定删除${MODULE_NAME} ${el.userName}(${el.loginName})?`}
              onConfirm={del}
            >
              <Button size="small" type="link">
                删除
              </Button>
            </Popconfirm>
          )}
        </Space>
      );
    },
  },
];

export default TableColumns;
