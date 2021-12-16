/**
 * @Date 2021-06-21 10:31:20
 * @Remark
 */

// react
// lib
import SearchRow from "./SearchRow";
import SearchCol from "./SearchCol";
import SearchAction from "./SearchAction";
// config

export const SEARCH_FORM_PROPS = {
  colon: false,
  labelCol: {
    xxl: { span: 8 },
    xl: { span: 8 },
    lg: { span: 8 },
    md: { span: 8 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xxl: { span: 16 },
    xl: { span: 16 },
    lg: { span: 16 },
    md: { span: 16 },
    sm: { span: 18 },
  },
};

export default {
  FORM_PROPS: SEARCH_FORM_PROPS,
  Row: SearchRow,
  Col: SearchCol,
  Action: SearchAction,
};
