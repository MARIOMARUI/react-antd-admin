/**
 * @Date 2020-06-24 10:30:09
 * @Remark
 */

// react
import React from "react";
// lib
import { Button } from "antd";
import { SearchOutlined, ReloadOutlined } from "@ant-design/icons";
// config
// style

export default function FormAction(props: {
  search?: () => void;
  reset?: () => void;
}) {
  const { search, reset } = props;
  return (
    <div className="search-btn">
      {search && (
        <Button icon={<SearchOutlined />} onClick={search}>
          <span>查询</span>
        </Button>
      )}
      {reset && (
        <Button icon={<ReloadOutlined />} onClick={reset}>
          <span>重置</span>
        </Button>
      )}
    </div>
  );
}
