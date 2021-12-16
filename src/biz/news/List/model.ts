/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-09-07 11:40:16
 * @LastEditTime: 2021-09-07 15:58:04
 */
export interface NewsPage {
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
export interface NewsAdd {}
export interface NewsUpdate {
    content:string,
    title:string
}
export interface NewsDel {}
