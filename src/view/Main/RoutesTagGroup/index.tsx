/**
 * @Date 2020-06-23 15:22:53
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Tag, Menu, Dropdown } from "antd";
import { MenuOutlined, MoreOutlined } from "@ant-design/icons";
import { useLocation, useHistory } from "react-router";
import BetterScroll from "better-scroll";
// scroll
// components & widget
// style
import "./component.less";
// config
// script & methods & public
// store
import { observer } from "mobx-react";
import { appState } from "state/global";
// controller
import { getMenuByPath } from "routes/logic";
import { getCodeFromPath, getUpperCodeFromPath } from "routes/format";
import browserUtils from "utils/browserUtils";
// interface
// 其它

let bs: BetterScroll | null = null;

function initScroll() {
  bs = new BetterScroll(".scroll-wrapper", {
    scrollX: true,
    scrollY: false,
    bounce: false,
    scrollbar: true,
    click: true,
    mouseWheel: {
      speed: 20,
    },
  });
}

function RoutesTagGroup() {
  const location = useLocation();
  const history = useHistory();

  const tags = appState.getTagGroup();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    appState.addTag(getMenuByPath("/main"));
    //
    initScroll();
    return () => {
      appState.delTagOther();
    };
  }, []);

  useEffect(() => {
    const menu = getMenuByPath(location.pathname);

    const code = getCodeFromPath(location.pathname);
    const upperCode = getUpperCodeFromPath(location.pathname);

    appState.addTag(menu);

    appState.addOpen(upperCode);
    appState.setSelected([code, upperCode]);
    // 延迟刷新计算新滚动
    setTimeout(() => {
      browserUtils.setTitle(menu?.name);
      if (bs) {
        bs.refresh();
      }
    }, 100);
    return () => {
      //
    };
  }, [location]);

  function isActive(tag: RouteMenu) {
    const flag = tag.path === location.pathname;
    return flag;
  }

  function toLastView() {
    const lastView = appState.getTagGroup().slice(-1)[0];

    if (lastView) {
      history.push(lastView.path);
    } else {
      history.push("/main");
    }
  }

  const DropdownMenu = () => {
    const menu = getMenuByPath(location.pathname);

    return (
      <Menu
        onClick={(e) => {
          if (e.key === "close") {
            if (menu) {
              appState.delTag(menu);
              if (isActive(menu)) {
                toLastView();
              }
            }
          }
          if (e.key === "closeOther") {
            if (menu) {
              appState.delTagOther(menu);
            }
          }
          if (e.key === "closeAll") {
            appState.delTagOther();
            toLastView();
          }
          setVisible(false);
        }}
      >
        <Menu.Item key="close">关闭当前标签页</Menu.Item>
        <Menu.Item key="closeOther">关闭其它标签页</Menu.Item>
        <Menu.Item key="closeAll">关闭所有标签页</Menu.Item>
      </Menu>
    );
  };

  return (
    <div className="routes-tag-wrapper">
      <div className="routes-tag-group scroll-wrapper">
        <div className="scroll-content">
          {tags.map((tag) => {
            const TagIcon = tag.icon || MenuOutlined;

            return (
              <Tag
                style={{
                  height: "26px",
                  lineHeight: "24px",
                  cursor: "pointer",
                }}
                key={tag.id}
                icon={<TagIcon />}
                color={tag.path === location.pathname ? "#039BE5" : undefined}
                closable={tag.code !== "main"}
                onClick={() => {
                  history.push(tag.path);
                }}
                onClose={() => {
                  appState.delTag(tag);
                  if (isActive(tag)) {
                    toLastView();
                  }
                }}
              >
                {tag.name}
              </Tag>
            );
          })}
        </div>
      </div>
      <Dropdown
        overlay={<DropdownMenu />}
        visible={visible}
        onVisibleChange={(val) => {
          setVisible(val);
        }}
      >
        <span className="routes-tag-menu">
          <MoreOutlined />
          操作
        </span>
      </Dropdown>
    </div>
  );
}

export default observer(RoutesTagGroup);
