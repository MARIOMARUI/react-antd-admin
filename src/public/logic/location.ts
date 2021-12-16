/**
 * @Date 2021-06-30 14:20:21
 * @Remark
 */

import { GPGLL_INDICATOR_DICT } from "biz/code/codeMap";
import NP from "number-precision";
import _ from "lodash";

function formatNMEAData(params: number) {
  const temp1 = NP.divide(params, 100);
  const resultA = _.floor(temp1);

  const temp2 = NP.divide(NP.minus(temp1, resultA), 6);
  const resultB = _.floor(NP.times(temp2, 10), 5);

  return NP.plus(resultA, resultB);
}

// 不用处理的经纬度函数
export function locationFn(position: NMEAPosition): FormatPosition {
  const { latitude } = position;
  const { longitude } = position;

  return {
    latitude,
    longitude,
    text: `${GPGLL_INDICATOR_DICT[position.latitudeIndicator]} ${latitude} / ${GPGLL_INDICATOR_DICT[position.longitudeIndicator]
      } ${longitude}`,
  };
}

// 格式化电池位置数据以便在高德地图上展示
export function formatNMEAPosition(position: NMEAPosition): FormatPosition {
  const latitude = formatNMEAData(position.latitude);
  const longitude = formatNMEAData(position.longitude);
  // const { latitude } = position;
  // const { longitude } = position;

  return {
    latitude,
    longitude,
    text: `${GPGLL_INDICATOR_DICT[position.latitudeIndicator]} ${latitude} / ${GPGLL_INDICATOR_DICT[position.longitudeIndicator]
      } ${longitude}`,
  };
}
