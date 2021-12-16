/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-10 18:18:57
 * @LastEditTime: 2021-10-27 14:47:11
 */
/**
 * @Date 2021-06-21 15:45:06
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Form, Select, Spin } from "antd";
// components & widget
// style
// config
// script & methods & public
import logUtils from "utils/logUtils";
// store
// controller
import { getDepartmentListService } from "biz/department/service";
import _ from "lodash";
// interface && type && class
// 其它

const { Option } = Select;

export function FormItemDepartment(props: {
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const { name, label, required, defaultValue } = props;
  const [loading, setloading] = useState(false);
  const [list, setList] = useState<Department[]>([]);

  const search = async (val?: string) => {
    logUtils.info("部门搜索", val);
    setloading(true);
    const result = await getDepartmentListService();
    setloading(false);
    if (result.payload) {
      setList(result.payload);
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
      name={name || "department"}
      label={label || "部门名称"}
      rules={[
        {
          required,
          message: "该字段为必须字段",
        },
      ]}
    >
      <Select
        defaultActiveFirstOption={false}
        notFoundContent={loading ? <Spin size="small" /> : null}
        showArrow={false}
        allowClear
        filterOption={false}
        onSearch={_.throttle(search, 1000)}
        showSearch
      >
        {list.map((el) => (
          <Option key={el.deptId} value={el.deptId}>
            {`${el.pdept ? `${el.pdept.deptName} - ` : ""}${el.deptName}`}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default FormItemDepartment;
