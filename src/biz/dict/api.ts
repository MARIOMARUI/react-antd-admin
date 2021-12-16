/**
 * @Date 2021-06-22 09:56:50
 * @Remark
 */

// API -------------------------------------------------------------

export const API_DICT: Api = {
  title: "获取字典数据",
  path: "dictionary/get",
  method: "POST",
  prefix: "li_dian",
  remark: "字典数据",
};

// req
//

// res
export type ResDict = ResObject<MainDict>;
