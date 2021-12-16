/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-02 17:39:19
 * @LastEditTime: 2021-09-18 14:53:11
 */
/**
 * @Date 2021-06-21 15:45:06
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Form, Select, Spin } from "antd";
import _ from "lodash";
// components & widget
// style
// config
// script & methods & public
import logUtils from "utils/logUtils";
// store
// controller
import { searchAdminService } from "biz/admin/service";
// interface && type && class
// 其它

const { Option } = Select;

/* 添加管理员 选择经销商可分配账户 */
export function FormItemDistributableAccount(props: {
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  disabled?: boolean;
}) {
  const { name, label, required, defaultValue, disabled } = props;
  const [loading, setloading] = useState(false);
  const [list, setList] = useState<AdminDto[]>([]);

  const search = async (val?: string) => {
    logUtils.info("FormItemDistributableAccount", val);
    setloading(true);
    const result = await searchAdminService(val);
    setloading(false);
    if (result.payload) {
      setList(result.payload.list);
    }
  };

  useEffect(() => {
    search(defaultValue);
    return () => {
      //
    };
  }, [defaultValue]);

  return (
    <Form.Item
      name={name || "toConfigurePeople"}
      label={label || "可分配账户"}
      rules={[
        {
          required,
          message: "该字段为必须字段",
        },
      ]}
    >
      <Select
        placeholder="输入部分名称进行搜索"
        showSearch
        defaultActiveFirstOption={false}
        notFoundContent={loading ? <Spin size="small" /> : null}
        showArrow={false}
        allowClear
        filterOption={false}
        onSearch={_.throttle(search, 1000)}
        disabled={disabled || false}
      >
        {list.map((el: any) => (
          <Option key={el.userId} value={el.userId}>
            {`${el.loginName}`}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default FormItemDistributableAccount;
