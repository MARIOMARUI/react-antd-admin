/**
 * @Date 2021-06-22 09:47:07
 * @Remark
 */

// lib
// config
// script & methods & public
// http
// state
// service
import { simpleObjectService } from "public/service/simple.service";
import { dictState } from "state/global";
// api
import { API_DICT, ResDict } from "./api";
// interface && type && class
// 其它

// 分页
/** 字典数据 */
export async function getDictService() {
  const result = await simpleObjectService<{}, ResDict, MainDict>(API_DICT, {});
  if (result.payload) {
    dictState.dict = result.payload;
  }
  return result;
}
