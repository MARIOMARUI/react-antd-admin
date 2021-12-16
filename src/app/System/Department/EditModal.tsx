/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form, Input } from "antd";
// components & widget
import SelectDepartment from "cts/Form/SelectDepartment";
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
import { addDepartment, updateDepartment } from "./controller";
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
        department: info.pdept ? info.pdept.deptId : "0",
        deptName: info.deptName,
        departmentPhone: info.departmentPhone,
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
        updateDepartment(result, state.editInfo.deptId);
      } else {
        addDepartment(result);
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
        <SelectDepartment label="上级部门" refresh={show} />
        <Form.Item
          name="deptName"
          label="部门名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="departmentPhone"
          label="部门电话"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item>
        {/* 部门负责人 暂时不需要 */}
        {/* <SearchAdmin label="负责人" required /> */}
        <Form.Item name="remark" label="备注">
          <Input.TextArea {...TEXTAREA_PROPS} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
