/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-11-12 14:37:10
 * @LastEditTime: 2021-11-12 17:12:54
 */
/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect } from "react";
// lib
import { Modal, Form } from "antd";
// components & widget
// style
// config
import { MODULE_NAME } from "./config";
import { MODAL_STYLE } from "project/config";
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
        {/* <Form.Item
          name="companyName"
          label="公司名称"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Input />
        </Form.Item> */}
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
