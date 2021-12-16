/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-17 15:21:35
 * @LastEditTime: 2021-09-18 15:02:39
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
import { getDictService } from "biz/dict/service";
import { dictState } from "state/global";
// interface && type && class
// 其它

const { Option } = Select;

/**
 * 职位选择
 */
export function FormItemPosition(props: {
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  const { name, label, required, defaultValue } = props;
  const [loading, setloading] = useState(false);
  const [list, setList] = useState<DictDto[]>([]);

  const search = async (val?: string) => {
    logUtils.info("FormItemPosition", val);
    setloading(true);
    const result = dictState?.departmentOccupationEnumList;
    setloading(false);
    setList(result);
  };

  useEffect(() => {
    getDictService();
    search(defaultValue);
    return () => {
      //
    };
  }, [defaultValue]);

  return (
    <Form.Item
      name={name || "departmentOccupationEnum"}
      label={label || "职位"}
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
      >
        {list.map((el) => (
          <Option key={el.statusCode} value={el.statusCode}>
            {el.value}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default FormItemPosition;
