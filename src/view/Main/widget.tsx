/**
 * @Date 2020-06-23 14:18:34
 * @Remark
 */

// react
import React from "react";
// config
import { APP_VERSION } from "config/env";

export const VersionShow = (props: { collapsed: boolean }) => {
  const { collapsed } = props;

  return (
    <div className="header-version">
      {!collapsed && <span>{APP_VERSION}</span>}
    </div>
  );
};

export default {};
