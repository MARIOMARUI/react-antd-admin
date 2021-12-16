/**
 * @Date 2021-06-18 17:34:52
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Form, Cascader } from "antd";
// components & widget
// style
// config
import { INPUT_REQUIRED_RULE } from "project/validRules";
// script & methods & public
// store
// controller
import { getAreaDataService } from "biz/area/service";
// interface && type && class
import { CascaderOptionType } from "antd/lib/cascader";
// 其它

function FormItemAreaCascader(props: { name?: string; label?: string }) {
  const { name, label } = props;

  const [list, setList] = useState<CascaderOptionType[]>([]);

  const search = async () => {
    const result = await getAreaDataService();
    if (result.payload) {
      setList(result.payload);
    }
  };

  useEffect(() => {
    search();
    return () => {
      //
    };
  }, []);

  return (
    <Form.Item
      name={name || "area"}
      label={label || "所在地区"}
      rules={[INPUT_REQUIRED_RULE]}
    >
      <Cascader options={list} placeholder="选择地区" />
    </Form.Item>
  );
}

export default FormItemAreaCascader;
