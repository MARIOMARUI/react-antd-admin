/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form, Input, Radio } from "antd";
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
import { addRole, updateRole } from "./controller";
import { ADMIN_STATUS_OPTION } from "public/constant";
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
        name: info.name,
        description: info.description,
        status: info.status,
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
        updateRole(result, state.editInfo.id);
      } else {
        addRole(result);
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
        <Form.Item name="name" label="角色名称" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="角色说明"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input.TextArea {...TEXTAREA_PROPS} />
        </Form.Item>
        <Form.Item name="status" label="是否启用" rules={[INPUT_REQUIRED_RULE]}>
          <Radio.Group>
            {ADMIN_STATUS_OPTION.map((el) => (
              <Radio key={el.code} value={el.code}>
                {el.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
