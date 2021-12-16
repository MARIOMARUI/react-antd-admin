/**
 * @Date 2020-07-02 16:10:45
 * @Remark
 */

// react
import React from "react";
// lib
import isNull from "lodash/isNull";
import { Modal, Transfer } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "../config";
// script & methods & public
// store
import { observer } from "mobx-react";
import { stateRoleModal } from "./state";
// controller
import { createModalTransferData, editRolePermission } from "./controller";
// interface && type && class
import { TransferItem, RenderResult } from "antd/lib/transfer";
// 其它

function RoleModal() {
  const info = stateRoleModal.getModal();
  const title = `编辑${MODULE_NAME} ${info ? info.name : ""} 的权限`;
  const show = !isNull(info);

  const handleCancel = () => {
    stateRoleModal.setModal(null);
  };

  const handleOk = () => {
    editRolePermission();
  };

  const handleChange = (nextTargetKeys: string[]) => {
    stateRoleModal.setTargetKeys(nextTargetKeys);
  };

  const renderTransferText = (item: TransferItem): RenderResult => {
    const text = item.title;
    return text || item.key || null;
  };

  return (
    <Modal
      title={title}
      visible={show}
      onCancel={handleCancel}
      onOk={handleOk}
      destroyOnClose
      maskClosable
      width={1000}
      okButtonProps={{
        loading: stateRoleModal.modalLoading,
      }}
    >
      <Transfer
        dataSource={createModalTransferData()}
        render={renderTransferText}
        titles={["可选", "选中"]}
        showSearch
        listStyle={{
          width: 450,
          height: 500,
        }}
        targetKeys={stateRoleModal.getTargetKeys()}
        onChange={handleChange}
      />
    </Modal>
  );
}

export default observer(RoleModal);
