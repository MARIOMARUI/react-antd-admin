/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:34:01
 * @LastEditTime: 2021-09-07 15:58:16
 */

import {
  simpleObjectService,
  simplePageService,
} from "public/service/simple.service";
import {
  API_NEWS_ADD,
  API_NEWS_DEL,
  API_NEWS_PAGE,
  API_NEWS_UPDATE,
  ReqNewsAdd,
  ReqNewsDel,
  ReqNewsPage,
  ReqNewsUpdate,
  ResNewsAdd,
  ResNewsDel,
  ResNewsPage,
  ResNewsUpdate,
} from "./api";
import { NewsAdd, NewsDel, NewsPage, NewsUpdate } from "./model";

/** @desc 消息列表 */
export async function pageNewsService(params: ReqNewsPage) {
  return simplePageService<ReqNewsPage, ResNewsPage, NewsPage>(
    API_NEWS_PAGE,
    params,
  );
}

/** @desc 添加消息 */
export async function addNewsService(params: ReqNewsAdd) {
  return simpleObjectService<ReqNewsAdd, ResNewsAdd, NewsAdd>(
    API_NEWS_ADD,
    params,
  );
}
/** @desc 修改消息 */
export async function updateNewsService(params: ReqNewsUpdate) {
  return simpleObjectService<ReqNewsUpdate, ResNewsUpdate, NewsUpdate>(
    API_NEWS_UPDATE,
    params,
  );
}
/** @desc 删除消息 */
export async function delNewsService(params: ReqNewsDel) {
  return simpleObjectService<ReqNewsDel, ResNewsDel, NewsDel>(
    API_NEWS_DEL,
    params,
  );
}
