/**
 * @Date 2020-08-26 09:40:02
 * @Remark
 */

// react
import React from "react";
// lib
import { Skeleton } from "antd";
// components & widget
// style
// config
// script & methods & public
// store
// controller
// interface && type
// 其它

function LazyLoading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
      }}
    >
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}

export default LazyLoading;
