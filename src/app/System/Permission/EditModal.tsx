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
import { MODAL_STYLE } from "project/config";
import { INPUT_REQUIRED_RULE } from "project/validRules";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
// import { dictState } from "state/global";
// controller
import { addPermission, updatePermission } from "./controller";
import { ADMIN_STATUS_OPTION } from "public/constant";
// interface && type
// 其它

// const { Option } = Select;

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
        status: info.status,
        uri: info.uri,
        code: info.value,
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
        updatePermission(result, state.editInfo.id);
      } else {
        addPermission(result);
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
        <Form.Item name="name" label="权限名称" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item name="code" label="权限代码" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item name="uri" label="URI" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        {/* <Form.Item name="AppMenuDto" label="所属菜单" rules={[INPUT_REQUIRED_RULE]}>
          <Select>
            {dictState.menus.map((el) => (
              <Option key={el.id} value={el.id}>
                {el.title}
              </Option>
            ))}
          </Select>
        </Form.Item> */}
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
