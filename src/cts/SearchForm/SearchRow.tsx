/**
 * @Date 2019-10-17 10:00:08
 * @Remark
 */

// react
import React, { PureComponent } from "react";
// lib
import { Row } from "antd";
// config

interface Props {
  type?: "small" | "normal" | "large" | "half" | "full";
}

export default class SearchRow extends PureComponent<Props> {
  public render() {
    const { children } = this.props;

    return (
      <Row gutter={5} align="middle">
        {children}
      </Row>
    );
  }
}
