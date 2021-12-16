/**
 * @Date 2020-06-23 15:59:03
 * @Remark
 */

// react
import React from "react";
// lib
import { Modal, Form, Input } from "antd";
// components & widget
// style
// config
import { PWD_LENGTH_RULE } from "project/validRules";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
// controller
import { letUserPwd } from "./controller";
import { REQUIRED_RULE } from "utils/validator";
// interface && type
// 其它

function PwdModal() {
  const [form] = Form.useForm();

  const title = "修改密码";
  const show = state.pwdModal;

  const handleCancel = () => {
    form.resetFields();
    state.pwdModal = false;
  };

  const handleOk = async () => {
    try {
      const result = await form.validateFields();
      const { oldPwd, newPwd } = result;
      letUserPwd(oldPwd, newPwd);
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
      okButtonProps={{
        loading: state.pwdLoading,
      }}
    >
      <Form name="PwdModalForm" form={form}>
        <Form.Item
          name="oldPwd"
          label="旧密码"
          rules={[REQUIRED_RULE("请填写旧密码"), PWD_LENGTH_RULE]}
        >
          <Input.Password
            placeholder={`请填写旧密码, ${PWD_LENGTH_RULE.message}`}
            maxLength={PWD_LENGTH_RULE.max}
            allowClear
          />
        </Form.Item>
        <Form.Item
          name="newPwd"
          label="新密码"
          rules={[REQUIRED_RULE("请填写新密码"), PWD_LENGTH_RULE]}
        >
          <Input.Password
            placeholder={`请填写新密码, ${PWD_LENGTH_RULE.message}`}
            maxLength={PWD_LENGTH_RULE.max}
            allowClear
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(PwdModal);
