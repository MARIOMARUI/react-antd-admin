/**
 * @Date 2019-10-17 10:00:08
 * @Remark
 */

// react
import React, { PureComponent } from "react";
// lib
import { Col } from "antd";

const SEARCH_FORM_COL_SMALL = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 4,
};

const SEARCH_FORM_COL_NORMAL = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 8,
  xl: 6,
  xxl: 6,
};

const SEARCH_FORM_COL_LARGE = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 12,
  xl: 12,
  xxl: 8,
};

const SEARCH_FORM_COL_HALF = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12,
};

const SEARCH_FORM_COL_FULL = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24,
};

interface Props {
  type?: "small" | "normal" | "large" | "half" | "full";
}

export default class SearchCol extends PureComponent<Props> {
  public render() {
    // props && state
    const { type, children } = this.props;

    let layout = SEARCH_FORM_COL_NORMAL;
    if (type) {
      if (type === "full") {
        layout = SEARCH_FORM_COL_FULL;
      }
      if (type === "half") {
        layout = SEARCH_FORM_COL_HALF;
      }
      if (type === "large") {
        layout = SEARCH_FORM_COL_LARGE;
      }
      if (type === "small") {
        layout = SEARCH_FORM_COL_SMALL;
      }
    }

    return <Col {...layout}>{children}</Col>;
  }
}
