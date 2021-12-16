/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-26 14:01:14
 */
/**
 * @Date 2021-06-10 18:55:55
 * @Remark
 */

// ROOT管理员账户ID
export const ROOT_ADMIN_USER_ID = "615177282801942528";
// 路由模式
export const ROUTE_MODE: "static" | "dynamic" = "dynamic"; // 静态就显示全部路由不做控制,动态就根据账户返回的状态控制
// 路由前缀
export const ROUTE_PREFIX = "main";
// 重要限制类ID
export const COMMUNICATION_MODULE_TYPE_NAME = "通信模块"; // 通信模块名称
export const COMMUNICATION_MODULE_TYPE_ID = "628269937201037312"; // 通信模块ID
// 图片尺寸限制,单位MB
export const UPLOAD_SETTING = {
  IMAGE_SIZE: 1,
};
// TextArea
export const TEXTAREA_PROPS = {
  autoSize: { minRows: 5, maxRows: 10 },
  allowClear: true,
};
// modal
export const MODAL_STYLE = {
  // 宽度
  COL2: 700,
  COL3: 1000,
  // Form.Item
  FORM_6_15: {
    colon: false,
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 15,
    },
  },
  FORM_8_16: {
    colon: false,
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  },
  FORM_10_14: {
    colon: false,
    labelCol: {
      span: 10,
    },
    wrapperCol: {
      span: 14,
    },
  },
  FORM_24: {
    column: 1,
  },
  FORM_ROW_GUTTER: 5,
};
// 页码通用设置
export const TABLE_PAGINATION = {
  showTotal: (total: number, range: number[]) => {
    return `${total} 条记录中的 ${range[0]}-${range[1]} 条`;
  },
  showSizeChanger: true,
  showQuickJumper: true,
  pageSizeOptions: ["3", "10", "15", "30", "50", "100"],
};
// 本地存储
export const LOCAL_ACCOUNT = "account";
export const LOCAL_AUTH = "htua";
export const LOCAL_MENU_OPEN = "menuOpen";
export const LOCAL_MENU_SELECTED = "menuSelected";
export const LOCAL_TAG_GROUP = "topTagGroup";
