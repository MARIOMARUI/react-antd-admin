/**
 * @Date 2021-06-18 14:40:38
 * @Remark
 */

export interface ReqAccessory {
  accessoriesManagementId: string;
}

export type ResAccessory = ResObject<Accessory>;

// API -------------------------------------------------------------

export const API_ACCESSORY_PAGE: Api = {
  title: "配件分页",
  path: "accessories_management/list",
  method: "POST",
  prefix: "li_dian",
  remark: "配件",
};

// req
export interface ReqAccessoryPage extends ReqPage {
  modelName?: string;
}

// res
export type ResAccessoryPage = ResPage<Accessory>;

// API -------------------------------------------------------------

export const API_ACCESSORY_ADD: Api = {
  title: "配件添加",
  path: "accessories_management/add",
  method: "POST",
  prefix: "li_dian",
  remark: "配件",
};

// req
export interface ReqAccessoryAdd {
  accessoryName: string;
  enable: boolean;
  price: number;
  quantityUnit: string;
  remark: string;
  type: string;
}

// res
// ResAccessory

// API -------------------------------------------------------------

export const API_ACCESSORY_UPDATE: Api = {
  title: "编辑配件",
  path: "accessories_management/update",
  method: "POST",
  prefix: "li_dian",
  remark: "配件",
};

// req
export interface ReqAccessoryUpdate extends ReqAccessoryAdd, ReqAccessory {}

// res
// ResAccessory

// API -------------------------------------------------------------

export const API_ACCESSORY_DEL: Api = {
  title: "删除配件",
  path: "accessories_management/delete",
  method: "POST",
  prefix: "li_dian",
  remark: "配件",
};

// req
// ReqAccessory

// res
// ResAccessory

// API -------------------------------------------------------------

export const API_ACCESSORY_DETAIL: Api = {
  title: "配件详情",
  path: "accessories_management/get",
  method: "POST",
  prefix: "li_dian",
  remark: "配件",
};

// req
// ReqAccessory

// res
// ResAccessory
