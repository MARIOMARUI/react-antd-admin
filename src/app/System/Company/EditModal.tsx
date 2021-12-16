/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form, Input, Select } from "antd";
// components & widget
import FormItemAreaCascader from "cts/Form/FormItemAreaCascader";
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
import { addCompany, updateCompany } from "./controller";
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
        address: info.address,
        companyName: info.companyName,
        area: [info.province, info.city, info.district],
        remark: info.remark,
        regionId: info.regionId,
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
        updateCompany(result, state.editInfo.companyId);
      } else {
        addCompany(result);
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
          name="companyName"
          label="公司名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item>
        <FormItemAreaCascader />
        <Form.Item
          name="address"
          label="详细地址"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="regionId"
          label="大区"
        >
          <Select placeholder="请选择大区">
            {state.regionList.map((el) => (
              <Select.Option key={el.regionId} value={el.regionId}>
                {el.regionName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="remark" label="备注">
          <Input.TextArea {...TEXTAREA_PROPS} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
