/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-10-13 14:52:55
 */
/**
 * @Date 2020-07-02 16:10:45
 * @Remark
 */

// react
import React from "react";
// lib
import isNull from "lodash/isNull";
import { Modal, Checkbox, Row, Col } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "../config";
// script & methods & public
// store
import { observer } from "mobx-react";
import { stateRoleModal } from "./state";
import { dictState } from "state/global";
// controller
import { editRoleMenu } from "./controller";
// interface && type && class
// 其它

function RoleModal() {
  const info = stateRoleModal.getModal();
  const title = `编辑${MODULE_NAME} ${info ? info.name : ""} 的菜单`;
  const show = !isNull(info);

  const have = stateRoleModal.getTargetKeys();

  const handleCancel = () => {
    stateRoleModal.setModal(null);
  };

  const onChange = (value: any) => {
    editRoleMenu(value);
  };

  return (
    <Modal
      title={title}
      visible={show}
      onCancel={handleCancel}
      destroyOnClose
      footer={null}
      maskClosable
      width={1000}
    >
      <Checkbox.Group
        className="mf-input-full"
        value={have}
        disabled={stateRoleModal.modalLoading}
        onChange={onChange}
      >
        {dictState.menus
          .filter((it) => it.level === 0)
          .map((it) => {
            return (
              <div key={it.id} className="mb-15">
                <Row className="mt-5">
                  <Col span={24} key={it.id}>
                    <Checkbox value={it.id.toString()}>{it.title}</Checkbox>
                  </Col>
                </Row>
                <Row className="mt-5">
                  {dictState.menus
                    .filter((el) => el.parentId === it.id)
                    .map((item) => {
                      return (
                        <Col span={6} key={item.id}>
                          <Checkbox value={item.id.toString()}>
                            {item.title}
                          </Checkbox>
                        </Col>
                      );
                    })}
                </Row>
              </div>
            );
          })}
      </Checkbox.Group>
    </Modal>
  );
}

export default observer(RoleModal);
