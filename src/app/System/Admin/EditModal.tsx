/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Modal, Form, Input, Radio, Checkbox, Row, Col, Select } from "antd";
// components & widget
import FormItemUploader from "cts/Form/FormItemUploader";
import SearchCompany from "cts/Form/SearchCompany";
import FormItemDepartment from "cts/Form/FormItemDepartment";
import FormItemPosition from "cts/Form/FormItemPosition";
import FormItemDistributableAccount from "cts/Form/FormItemDistributableAccount";
// style
// config
import { ADMIN_STATUS_OPTION, GENDER_OPTION } from "public/constant";
import { MODULE_NAME } from "./config";
import { MODAL_STYLE } from "project/config";
import { INPUT_REQUIRED_RULE } from "project/validRules";
// script & methods & public
// store
import { observer } from "mobx-react";
import { state } from "./state";
// import { userState } from "state/global";
// controller
import { addAdmin, updateAdmin } from "./controller";
import { typeListFilter } from "./logic";
import { createFormFileList } from "biz/file/logic";
import { getAdminAccountTypeService } from "biz/admin/service";
// interface && type
// 其它

function EditModal() {
  const [form] = Form.useForm();

  const [type, setType] = useState("");
  const [typeList, setTypeList] = useState<Dict[]>([]);
  const [needCompany, setNeedCompany] = useState(false);

  // const account = userState.getAccount();
  const show = state.editModalShow;
  const title = `${state.editInfo ? "编辑" : "添加"}${MODULE_NAME}`;

  useEffect(() => {
    // const ac = userState.getAccount();

    const getAdminAccountType = async () => {
      setTypeList([]);
      // 调用服务
      const r1 = await getAdminAccountTypeService();
      // 成功
      if (!r1.payload) {
        return;
      }
      // 景区账号业务不确定,先隐藏
      // setTypeList(r1.payload.filter((el) => el.statusCode !== "scenicAccount"));
      setTypeList(r1.payload);
    };

    if (show) {
      setType("");
      setNeedCompany(false);
      getAdminAccountType();
      form.resetFields();
    }
    if (state.editInfo) {
      // 编辑
      const info = state.editInfo;
      form.setFieldsValue({
        accountTypeEnum: info.accountTypeEnum,
        accountTypeEnums: info.accountTypeEnums.split(","),
        company: info.companyId,
        department: info.deptId,
        gender: info.gender,
        loginName: info.loginName,
        mobile: info.mobile,
        status: info.status,
        userName: info.userName,
        avatarUrl: createFormFileList(info.avatarUrl),
        // 职位
        departmentOccupationEnum: info.departmentOccupationEnum,
        // 所分配账号
        toConfigurePeople: info.toConfigurePeople,
        // 大区
        regionId: info.regionId,
      });
      setType(info.accountTypeEnum);
      //
      setNeedCompany(info.accountTypeEnum !== "platformAccount");
    }

    // if (ac.companyId) {
    //   // 新增
    //   form.setFieldsValue({
    //     company: ac.companyId,
    //   });
    // }
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
        updateAdmin(result, state.editInfo.userId);
      } else {
        addAdmin(result);
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
      width={700}
      destroyOnClose
      maskClosable={false}
      okButtonProps={{
        loading: state.editModalLoading,
      }}
    >
      <Form {...MODAL_STYLE.FORM_6_15} form={form}>
        <Form.Item
          name="accountTypeEnum"
          label="账号类型"
          rules={[INPUT_REQUIRED_RULE]}
        >
          <Select
            onChange={(v: string) => {
              setType(v);
              setNeedCompany(v !== "platformAccount");
              const info = state.editInfo;
              form.setFieldsValue({
                accountTypeEnums: info ? info.accountTypeEnums.split(",") : [],
              });
            }}
          >
            {typeList.map((el) => (
              <Select.Option key={el.statusCode} value={el.statusCode}>
                {el.value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        {needCompany && (
          <SearchCompany
            // 公司必填
            required={
              type === "changeTheBatteryCompany" || type === "dealerAccount"
            }
            label="公司名称"
            extra="在<公司管理>中编辑公司或景区，属于总公司则不选择"
          />
        )}
        <Form.Item
          name="regionId"
          label="大区"
          rules={[
            {
              required: type === "dealerAccount",
              message: "该字段为必须字段",
            },
          ]}
        >
          <Select placeholder="请选择大区">
            {state.regionList.map((el) => (
              <Select.Option key={el.regionId} value={el.regionId}>
                {el.regionName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <FormItemDepartment label="所属部门" />
        <FormItemPosition label="职位" />
        <Form.Item
          name="loginName"
          label="账户名称"
          rules={[INPUT_REQUIRED_RULE]}
          extra="登录账户，使用英文和数字，不能重复"
        >
          <Input />
        </Form.Item>
        {!state.editInfo && (
          <Form.Item
            name="userPass"
            label="账户密码"
            rules={[INPUT_REQUIRED_RULE]}
          >
            <Input.Password />
          </Form.Item>
        )}
        {type !== "" && (
          <Form.Item
            name="accountTypeEnums"
            label="可添加账号类型"
            extra="可选组合：全选/平台/经销商/换电公司和经销商"
          >
            <Checkbox.Group className="mf-input-full">
              <Row>
                {typeListFilter(typeList, type).map((el) => (
                  <Col span={8} key={el.statusCode}>
                    <Checkbox value={el.statusCode}>{el.value}</Checkbox>
                  </Col>
                ))}
              </Row>
            </Checkbox.Group>
          </Form.Item>
        )}
        <FormItemUploader
          name="avatarUrl"
          label="用户头像"
          defaultValue={state.editInfo?.avatarUrl}
        />
        <Form.Item name="userName" label="姓名" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item name="mobile" label="电话" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        {/* 经销商必填 - 可分配账号  author:mr */}
        {type === "dealerAccount" && (
          <FormItemDistributableAccount disabled={!!state.editInfo} required />
        )}
        <Form.Item name="gender" label="性别" rules={[INPUT_REQUIRED_RULE]}>
          <Radio.Group>
            {GENDER_OPTION.map((el) => (
              <Radio key={el.code} value={el.code}>
                {el.name}
              </Radio>
            ))}
          </Radio.Group>
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
