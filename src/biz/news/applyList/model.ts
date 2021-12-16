/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:40:16
 * @LastEditTime: 2021-09-07 15:44:57
 */
export interface ApplyPage {
  noticeId: string;
  directLeaseDealerId: string;
  directLeaseDealerName: string;
  title: string;
  content: string;
  applicationStatusEnum: string;
  reviewTime: string;
  publishTime: string;
  isDeleted: boolean;
}
export interface ApplyAdd {}
export interface ApplyUpdate {
    content:string,
    title:string
}
export interface ApplyDel {}
