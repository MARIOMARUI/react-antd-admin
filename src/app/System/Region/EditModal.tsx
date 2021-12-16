/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-10-27 16:13:15
 * @LastEditTime: 2021-10-27 17:00:42
 */
/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form, Input } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "./config";
import { MODAL_STYLE, TEXTAREA_PROPS } from "project/config";
import { INPUT_REQUIRED_RULE } from "project/validRules";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
// controller
import { addRegion, updateRegion } from "./controller";
// interface && type
// 其它

function EditModal() {
  const [form] = Form.useForm();

  const show = state.editModalShow;
  const title = `${state.editInfo ? "编辑" : "添加"}${MODULE_NAME}`;

  useEffect(() => {
    if (show) {
      form.resetFields();
    }
    if (state.editInfo) {
      const info = state.editInfo;
      form.setFieldsValue({
        regionName: info.regionName,
        remark: info.remark,
      });
    }
    return () => {
      //
    };
  }, [form, show]);

  const handleCancel = () => {
    state.setEditModal(false);
  };

  const handleOk = async () => {
    try {
      const result = await form.validateFields();
      if (state.editInfo) {
        updateRegion(result, state.editInfo.regionId);
      } else {
        addRegion(result);
      }
    } catch (error) {
      //
    }
  };

  return (
    <Modal
      title={title}
      visible={show}
      onCancel={handleCancel}
      onOk={handleOk}
      destroyOnClose
      maskClosable
      okButtonProps={{
        loading: state.editModalLoading,
      }}
    >
      <Form {...MODAL_STYLE.FORM_6_15} form={form}>
        <Form.Item
          name="regionName"
          label="区域名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="remark" label="备注">
          <Input.TextArea {...TEXTAREA_PROPS} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
