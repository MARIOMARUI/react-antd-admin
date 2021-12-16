/**
 * @Date 2021-06-23 14:38:11
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
// interface && type && class
// 其它

const { Option } = Select;

export function SelectDepartment(props: {
  name?: string;
  label?: string;
  refresh?: boolean;
}) {
  const { name, label, refresh } = props;
  const [loading, setloading] = useState(false);
  const [list, setList] = useState<Department[]>([]);

  const search = async (val?: string) => {
    logUtils.info("SelectDepartment", val);
    setloading(true);
    const result = await getDepartmentListService();
    setloading(false);
    if (result.payload) {
      setList(result.payload);
    }
  };

  useEffect(() => {
    if (refresh) {
      search();
    }
    return () => {
      //
    };
  }, [refresh]);

  return (
    <Form.Item
      name={name || "department"}
      label={label || "部门"}
      rules={[
        {
          required: true,
          message: "该字段为必须字段",
        },
      ]}
    >
      <Select
        placeholder=""
        defaultActiveFirstOption={false}
        notFoundContent={loading ? <Spin size="small" /> : null}
        showArrow
        allowClear
        filterOption={false}
      >
        <Option value="0">无</Option>
        {list.map((el) => (
          <Option key={el.deptId} value={el.deptId}>
            {el.deptName}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SelectDepartment;
