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
import { searchCompanyService } from "biz/company/service";
// interface && type && class
// 其它

const { Option } = Select;

export function SearchCompany(props: {
  name?: string;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  extra?: string;
}) {
  const { name, label, required, defaultValue, extra } = props;
  const [loading, setloading] = useState(false);
  const [list, setList] = useState<Company[]>([]);

  const search = async (val?: string) => {
    logUtils.info("SearchAdmin", val);
    setloading(true);
    const result = await searchCompanyService(val);
    setloading(false);
    if (!result.payload) {
      return;
    }
    setList(result.payload.list);
  };

  useEffect(() => {
    search(defaultValue);
    return () => {
      //
    };
  }, [defaultValue]);

  return (
    <Form.Item
      name={name || "company"}
      label={label || "选择公司"}
      rules={[
        {
          required,
          message: "该字段为必须字段",
        },
      ]}
      extra={extra}
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
      >
        {list.map((el) => (
          <Option key={el.companyId} value={el.companyId}>
            {el.companyName}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}

export default SearchCompany;
