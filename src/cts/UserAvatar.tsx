/**
 * @Date 2020-07-03 16:18:28
 * @Remark
 */

// react
import React from "react";
// lib
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
// config
// 其它

function getIconSize(size?: "large" | "small" | "default" | number) {
  if (size) {
    if (typeof size === "number") {
      return size / 2;
    }
    return size;
  }
  return 16;
}

function UserAvatar(props: {
  src: string;
  size?: "large" | "small" | "default" | number;
  className?: string;
}) {
  const { src, size, className } = props;

  if (src === "") {
    return (
      <Avatar
        size={size}
        className={className}
        icon={
          <UserOutlined
            style={{
              fontSize: getIconSize(size),
            }}
          />
        }
        src={src}
        style={{ backgroundColor: "#03a9f4" }}
      />
    );
  }
  return <Avatar src={src} size={size} className={className} />;
}

export default UserAvatar;
