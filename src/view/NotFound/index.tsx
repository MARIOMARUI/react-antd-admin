/**
 * @Date 2020-06-23 14:45:35
 * @Remark
 */

// react
import React from "react";
// lib
import { Result, Button } from "antd";
import { useHistory } from "react-router";
// components & widget
// style
// config
// script & methods & public
// store
// controller
// interface && type
// 其它

function NotFound() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div
      className="flex-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Result
        status="404"
        title="404"
        subTitle="Sorry, 你要访问的页面并不存在"
        extra={
          <Button type="primary" onClick={goBack}>
            Back
          </Button>
        }
      />
    </div>
  );
}

export default NotFound;
