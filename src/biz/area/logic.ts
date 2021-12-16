/**
 * @Date 2020-05-07 14:42:174
 * @Remark
 */

// lib
import _ from "lodash";
// state
// model
import { CascaderOptionType } from "antd/lib/cascader";
import { dictState } from "state/global";

export function getAntdCascaderOption(areaMap: AreaMap): CascaderOptionType[] {
  const p = _.map(areaMap.province_list, (el, key) => {
    const result: CascaderOptionType = {
      value: key,
      label: el,
      children: [],
    };
    return result;
  });
  const c = _.map(areaMap.city_list, (el, key) => {
    const result: CascaderOptionType = {
      value: key,
      label: el,
      children: [],
    };
    return result;
  });
  const d = _.map(areaMap.county_list, (el, key) => {
    const result: CascaderOptionType = {
      value: key,
      label: el,
    };
    return result;
  });

  for (const iter of c) {
    const cityCode = iter.value as string;
    iter.children = d.filter((it) => {
      const code = it.value as string;
      const flag = code.slice(0, 4);
      return flag === cityCode.slice(0, 4);
    });
  }

  for (const iter of p) {
    const provinceCode = iter.value as string;
    iter.children = c.filter((it) => {
      const code = it.value as string;
      const flag = code.slice(0, 2);
      return flag === provinceCode.slice(0, 2);
    });
  }

  return p;
}

export function getAreaText(code: AreaCode) {
  const area = dictState.areaMap;
  const p = area.province_list[code.province];
  const c = area.city_list[code.city];
  const d = area.county_list[code.district];

  const text = `${p} - ${c} - ${d}`;
  return {
    text,
    province: p || "unknown",
    city: c || "unknown",
    district: d || "unknown",
  };
}

/** 获取省列表 */
export function getProvinceArr() {
    const area = dictState.areaMap.province_list;
    return _.map(area, (el, key) => ({ value: key, label: el }));
}

/** 根据省Code 获取对应市列表 */
export function getCityTakeProvinceArr(provinceCode: string) {
    if (provinceCode.length !== 6) return [];
    const area = dictState.areaMap.city_list;
    const citys: StrMap[] = [];
    // eslint-disable-next-line max-len
    _.map(area, (el, key) => key.slice(0, 2) === provinceCode.slice(0, 2) && citys.push({ value: key, label: el }));
    return citys;
}

/** 根据市Code 获取对应县列表 */
export function getCountyTakeCityArr(cityCode: string) {
    if (cityCode.length !== 6) return [];
    const area = dictState.areaMap.county_list;
    const countys: StrMap[] = [];
    // eslint-disable-next-line max-len
    _.map(area, (el, key) => key.slice(0, 4) === cityCode.slice(0, 4) && countys.push({ value: key, label: el }));
    return countys;
}
