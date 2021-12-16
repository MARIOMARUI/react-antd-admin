/**
 * @Date 2020-06-23 15:59:03
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form, Input } from "antd";
// components & widget
// style
// config
import { NAME_LENGTH_RULE } from "project/validRules";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
import { userState } from "state/global";
// controller
// import { letUserInfoUpdate } from "./controller";
import { REQUIRED_RULE } from "utils/validator";
// interface && type
// 其它

function InfoModal() {
  const [form] = Form.useForm();

  const title = "修改用户信息";
  const show = state.infoModal;

  const account = userState.getAccount();

  useEffect(() => {
    if (show) {
      form.resetFields();
    }
    return () => {};
  }, [form, show]);

  const handleCancel = () => {
    state.infoModal = false;
  };

  const handleOk = async () => {
    try {
      // const result = await form.validateFields();
      // letUserInfoUpdate();
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
        loading: state.infoLoading,
      }}
    >
      <Form name="InfoModalForm" form={form}>
        <Form.Item
          name="newNickname"
          label="用户昵称"
          initialValue={account.userName}
          rules={[REQUIRED_RULE("请填写用户昵称"), NAME_LENGTH_RULE]}
        >
          <Input
            placeholder={`请填写用户昵称, ${NAME_LENGTH_RULE.message}`}
            maxLength={NAME_LENGTH_RULE.max}
            allowClear
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(InfoModal);
