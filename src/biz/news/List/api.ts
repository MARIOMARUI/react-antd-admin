/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:35:00
 * @LastEditTime: 2021-09-07 16:00:20
 */

import { NewsAdd, NewsDel, NewsPage, NewsUpdate } from "./model";

export const API_NEWS_PAGE: Api = {
    title: "消息管理_信息列表",
    path: "notice_publish/list",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_消息列表",
};

export interface PageSearch {
    directLeaseDealerName?: string; // 经销商
    title?: string; // 标题
  }
export interface ReqNewsPage extends ReqPage, PageSearch{

}
export type ResNewsPage = ResPage<NewsPage>;

// =====================================================================

export const API_NEWS_ADD: Api = {
    title: "消息管理_添加消息",
    path: "notice_publish/add",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_添加消息",
};

export interface ReqNewsAdd{
  content:string,
  title:string
}
export type ResNewsAdd = ResObject<NewsAdd>;

// =====================================================================

export const API_NEWS_UPDATE: Api = {
    title: "消息管理_修改消息",
    path: "notice_publish/update",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_修改消息",
};

// 业务ID;
export interface BusinessId {
  noticeId:string,
}

export interface ReqNewsUpdate extends ReqNewsAdd, BusinessId{

}
export type ResNewsUpdate = ResObject<NewsUpdate>;

// =====================================================================

export const API_NEWS_DEL: Api = {
    title: "消息管理_删除消息",
    path: "notice_publish/delete",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_删除消息",
};

export interface ReqNewsDel extends BusinessId{

}
export type ResNewsDel = ResObject<NewsDel>;
