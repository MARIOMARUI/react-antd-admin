/**
 * @Date 2020-08-24 13:46:57
 * @Remark
 */

// react
import React, { useEffect, useState } from "react";
// lib
import { Modal, Form, Input, Select /* Button */ } from "antd";
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
import { dictState } from "state/global";
// controller
import { addMenu, getCanAddMenus, updateMenu } from "./controller";
// interface && type
// 其它

const { Option } = Select;

function EditModal() {
  const [form] = Form.useForm();

  const show = state.editModalShow;
  const title = `${state.editInfo ? "编辑" : "添加"}${MODULE_NAME}`;

  const [list, setList] = useState<RouteMenu[]>([]);

  useEffect(() => {
    if (show) {
      getCanAddMenus(setList);

      form.resetFields();
    }
    if (state.editInfo) {
      const info = state.editInfo;
      form.setFieldsValue({
        title: info.title,
        uri: info.uri,
        parentId: info.parentId !== 0 ? info.parentId : undefined,
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
        updateMenu(result, state.editInfo.id);
      } else {
        addMenu(result);
      }
    } catch (error) {
      //
    }
  };

  const onChange = (value: string) => {
    const el: RouteMenu = JSON.parse(value);
    form.setFieldsValue({
      title: el.name,
      uri: el.path,
    });
  };

  // 执行脚本
  // const clickChange = () => {
  //   list.forEach((item) => {
  //     // 先执行 吧所有的一级菜单添加
  //     if (item.path.split("/").length === 3) {
  //       const p = {
  //         level: 0,
  //         parentId: 0,
  //         sort: 0,
  //         title: item.name,
  //         uri: item.path,
  //       };
  //       // console.log(p);
  //       addMenu(p);
  //     }
  //   });
  // };
  // const clickChange2 = () => {
  //   // 吧一级菜单拿出来;
  //   const arr = dictState.menus.filter(
  //     (el) => el.level === 0 && el.uri.split("/").length === 3,
  //   );
  //   list.forEach((item) => {
  //     // 后执行 吧所有的二级菜单添加
  //     arr.forEach((item1) => {
  //       if (item.path.includes(item1.uri) && item.path.split("/").length >= 4) {
  //         addMenu({
  //           level: 1,
  //           parentId: item1.id,
  //           sort: 0,
  //           title: item.name,
  //           uri: item.path,
  //         });
  //       }
  //     });
  //   });
  // };
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
        <Form.Item name="choose" label="快速选择">
          <Select onChange={onChange}>
            {list.map((el) => (
              <Option key={el.code} value={JSON.stringify(el)}>
                {el.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="title" label="菜单名称" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item name="uri" label="URI" rules={[INPUT_REQUIRED_RULE]}>
          <Input />
        </Form.Item>
        <Form.Item name="parentId" label="上级菜单">
          <Select>
            {dictState.menus
              .filter((el) => el.level === 0)
              .map((el) => (
                <Option key={el.id} value={el.id}>
                  {el.title}
                </Option>
              ))}
          </Select>
        </Form.Item>
        {/* <Form.Item label="">
          <Button onClick={clickChange}>执行脚本</Button>
          <Button onClick={clickChange2}>执行脚本2</Button>
        </Form.Item> */}
      </Form>
    </Modal>
  );
}

export default observer(EditModal);
