/**
 * @Date 2021-07-21 09:42:02
 * @Remark
 */

// lib
// import _ from "lodash";
// config
// script & methods & public
import { dictState } from "state/global";
// http
// service
import {
  simplePageService,
  simpleObjectService,
  simpleBooleanService,
} from "public/service/simple.service";
// api
import {
  ReqMenuPage,
  ResMenuPage,
  API_MENU_PAGE,
  ReqMenuAdd,
  API_MENU_ADD,
  API_MENU_UPDATE,
  ReqMenuUpdate,
  API_MENU_DEL,
  ResMenu,
} from "./api";
// interface && type && class
// 其它

// 菜单分页
export async function getMenuPageService(params: ReqMenuPage) {
  return simplePageService<ReqMenuPage, ResMenuPage, AppMenuDto>(
    API_MENU_PAGE,
    params,
  );
}

// 菜单列表
export async function getMenuListService() {
  const result = await simplePageService<ReqMenuPage, ResMenuPage, AppMenuDto>(
    API_MENU_PAGE,
    {
      pageNum: 1,
      pageSize: 999,
      title: "",
    },
  );
  if (result.payload) {
    dictState.menus = result.payload.list;
  }
}

// 菜单添加
export async function addMenuService(params: ReqMenuAdd) {
  return simpleObjectService<ReqMenuAdd, ResMenu, AppMenuDto>(
    API_MENU_ADD,
    params,
  );
}

// 菜单编辑
export async function updateMenuService(params: ReqMenuUpdate) {
  return simpleObjectService<ReqMenuUpdate, ResMenu, AppMenuDto>(
    API_MENU_UPDATE,
    params,
  );
}

// 菜单删除
export async function delMenuService(id: number) {
  return simpleBooleanService<ReqById, ResBoolean>(API_MENU_DEL, {
    id,
  });
}
