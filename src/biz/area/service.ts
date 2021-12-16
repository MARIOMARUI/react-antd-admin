/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-09-03 16:55:04
 */
/**
 * @Date 2021-02-22 14:21:04
 * @Remark
 */

// lib
// config
// script & methods & public
// state
import { dictState } from "state/global";
// http
import { open, bag, isOkRes } from "public/http/api";
// state
import { API_AREA_DATA, ResAreaData } from "./api";
// interface && type && class
import { CascaderOptionType } from "antd/lib/cascader";
// 其它
import { getAntdCascaderOption } from "./logic";

// 获得地区数据
export async function getAreaDataService() {
  // 打开接口
  const a1 = await open<{}, ResAreaData>(API_AREA_DATA, {});
  // 创建返回数据
  const data = bag<CascaderOptionType[]>(a1);
  // 成功后处理
  if (isOkRes(a1)) {
    dictState.areaMap = a1.data;
    data.payload = getAntdCascaderOption(a1.data);
  }
  return data;
}
// 获得地区数据 不做处理
export async function getAreaService() {
  // 打开接口
  const a1 = await open<{}, ResAreaData>(API_AREA_DATA, {});
  return a1;
}
