/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:35:00
 * @LastEditTime: 2021-09-07 16:46:21
 */

import { ApplyAdd, ApplyDel, ApplyPage, ApplyUpdate } from "./model";

export const API_APPLY_PAGE: Api = {
    title: "消息管理_申请列表",
    path: "notice_publish/listApply",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_申请列表",
};

export interface PageSearch {
    directLeaseDealerName?: string; // 经销商
    title?: string; // 标题
  }
export interface ReqApplyPage extends ReqPage, PageSearch{

}
export type ResApplyPage = ResPage<ApplyPage>;

// =====================================================================

export const API_APPLY_ADD: Api = {
    title: "消息管理_添加申请",
    path: "notice_publish/add",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_添加申请",
};

export interface ReqApplyAdd{
  content:string,
  title:string
}
export type ResApplyAdd = ResObject<ApplyAdd>;

// =====================================================================

export const API_APPLY_UPDATE: Api = {
    title: "消息管理_修改申请",
    path: "notice_publish/update",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_修改申请",
};

// 业务ID;
export interface BusinessId {
  noticeId:string,
}

export interface ReqApplyUpdate extends ReqApplyAdd, BusinessId{

}
export type ResApplyUpdate = ResObject<ApplyUpdate>;

// =====================================================================

export const API_APPLY_DEL: Api = {
    title: "消息管理_删除申请",
    path: "notice_publish/delete",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_删除申请",
};

export interface ReqApplyDel extends BusinessId{

}
export type ResApplyDel = ResObject<ApplyDel>;
// =====================================================================

export const API_AGREE: Api = {
    title: "消息管理_同意审核",
    path: "notice_publish/audit_agree",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_同意审核",
};
export const API_DISAGREE: Api = {
    title: "消息管理_不同意审核",
    path: "notice_publish/audit_denial",
    method: "POST",
    prefix: "li_dian",
    remark: "消息管理_不同意审核",
};

export interface ReqReviewComments extends BusinessId{

}
export type ResReviewComments = ResObject<ApplyDel>;
