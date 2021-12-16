/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:34:01
 * @LastEditTime: 2021-09-07 16:43:59
 */

import {
  simpleObjectService,
  simplePageService,
} from "public/service/simple.service";
import {
  API_AGREE,
  API_APPLY_ADD,
  API_APPLY_DEL,
  API_APPLY_PAGE,
  API_APPLY_UPDATE,
  API_DISAGREE,
  ReqApplyAdd,
  ReqApplyDel,
  ReqApplyPage,
  ReqApplyUpdate,
  ReqReviewComments,
  ResApplyAdd,
  ResApplyDel,
  ResApplyPage,
  ResApplyUpdate,
  ResReviewComments,
} from "./api";
import { ApplyAdd, ApplyDel, ApplyPage, ApplyUpdate } from "./model";

/** @desc 申请列表 */
export async function pageApplyService(params: ReqApplyPage) {
  return simplePageService<ReqApplyPage, ResApplyPage, ApplyPage>(
    API_APPLY_PAGE,
    params,
  );
}

/** @desc 添加申请 */
export async function addApplyService(params: ReqApplyAdd) {
  return simpleObjectService<ReqApplyAdd, ResApplyAdd, ApplyAdd>(
    API_APPLY_ADD,
    params,
  );
}
/** @desc 修改申请 */
export async function updateApplyService(params: ReqApplyUpdate) {
  return simpleObjectService<ReqApplyUpdate, ResApplyUpdate, ApplyUpdate>(
    API_APPLY_UPDATE,
    params,
  );
}
/** @desc 删除申请 */
export async function delApplyService(params: ReqApplyDel) {
  return simpleObjectService<ReqApplyDel, ResApplyDel, ApplyDel>(
    API_APPLY_DEL,
    params,
  );
}
/** @desc 同意 */
export async function agreeService(params: ReqReviewComments) {
  return simpleObjectService<ReqReviewComments, ResReviewComments, any>(
    API_AGREE,
    params,
  );
}
/** @desc 不同意 */
export async function disagreeService(params: ReqReviewComments) {
  return simpleObjectService<ReqReviewComments, ResReviewComments, any>(
    API_DISAGREE,
    params,
  );
}
