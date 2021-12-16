/**
 * @Date 2021-06-18 10:27:08
 * @Remark
 */

interface AppMenuDto {
  id: number;
  level: number;
  parentId: number;
  parentTitle: null | stirng; // 没有上级菜单为null
  sort: number;
  title: stirng;
  uri: stirng;
}

interface AppMenu {
  gmtCreate: stirng;
  gmtModified: stirng;
  id: stirng;
  level: number;
  menuCode: stirng;
  parentId: number;
  sort: number;
  title: stirng;
  uri: stirng;
}

// gmtCreate: "2021-07-21 16:20:15"
// gmtModified: "2021-07-21 16:20:27"
// id: "9"
// level: 1
// menuCode: ""
// parentId: 6
// sort: 0
// title: "权限管理"
// uri: "/main/system/perm"

// -------------------------------------------------------------

interface RouteMenu {
  id: number | string;
  code: string;
  name: string;
  icon?: any;
  path: string;
  sub?: RouteMenu[];
  hidden?: boolean;
}

interface RouteComponent {
  name: string;
  icon?: any;
  path: string;
  code?: string; //  从path中衍生
  component: any;
  sub?: RouteComponent[];
  //
  hidden?: boolean;
}
