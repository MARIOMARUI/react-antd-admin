/**
 * @Date 2020-06-28 14:46:37
 * @Remark
 */

// lib
// config
// script & methods & public
// http
import { open, bag, isOkRes } from "public/http/api";
// api
// interface && type && class
// 其它

/**
 * 通用获得数据服务
 * @param API 接口
 * @param params 参数
 * @param alert 自动错误提示
 */
export async function simpleService<Q, S extends Res, I>(
  API: Api,
  params: Q,
  alert = true,
) {
  // 打开接口
  const a1 = await open<Q, S>(API, params);
  // 创建返回数据
  const data = bag<I>(a1, alert);
  // 成功后处理
  if (isOkRes(a1)) {
    data.payload = a1.data as I;
  }
  return data;
}

/**
 * 通用获得分页类型数据服务
 * @param API 接口
 * @param params 参数
 * @param alert 自动错误提示
 */
export async function simplePageService<Q, S extends ResPage<I>, I>(
  API: Api,
  params: Q,
  alert = true,
) {
  // 打开接口
  const a1 = await open<Q, S>(API, params);
  // 创建返回数据
  const data = bag<PageData<I>>(a1, alert);
  // 成功后处理
  if (isOkRes(a1)) {
    data.payload = {
      total: a1.data.total,
      list: a1.data.list || [],
    };
  }
  return data;
}

/**
 * 通用获得列表类型数据服务
 * @param API 接口
 * @param params 参数
 * @param alert 自动错误提示
 */
export async function simpleListService<Q, S extends ResList<I>, I>(
  API: Api,
  params: Q,
  alert = true,
) {
  // 打开接口
  const a1 = await open<Q, S>(API, params);
  // 创建返回数据
  const data = bag<I[]>(a1, alert);
  // 成功后处理
  if (isOkRes(a1)) {
    data.payload = a1.data || [];
  }
  return data;
}

/**
 * 通用获得对象类型数据服务
 * @param API 接口
 * @param params 参数
 * @param alert 自动错误提示
 */
export async function simpleObjectService<Q, S extends ResObject<I>, I>(
  API: Api,
  params: Q,
  alert = true,
) {
  // 打开接口
  const a1 = await open<Q, S>(API, params);
  // 创建返回数据
  const data = bag<I>(a1, alert);
  // 成功后处理
  if (isOkRes(a1)) {
    data.payload = a1.data;
  }
  return data;
}

/**
 * 通用获得布尔类型数据服务
 * @param API 接口
 * @param params 参数
 * @param alert 自动错误提示
 */
export async function simpleBooleanService<Q, S extends ResBoolean>(
  API: Api,
  params: Q,
  alert = true,
) {
  // 打开接口
  const a1 = await open<Q, S>(API, params);
  // 创建返回数据
  const data = bag<boolean>(a1, alert);
  // 成功后处理
  if (isOkRes(a1)) {
    data.payload = true;
  }
  return data;
}
