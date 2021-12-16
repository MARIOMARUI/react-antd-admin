/**
 * @Date 2020-06-23 11:49:30
 * @Remark
 */

// config
import { ROUTE_PREFIX } from "project/config";

export function completePath(path?: string) {
  if (!path || path === "") {
    return `/${ROUTE_PREFIX}`;
  }
  return `/${ROUTE_PREFIX}/${path}`;
}

export function getCodeFromPath(path: string) {
  const arr = path.split(":");
  const url = arr[0];

  const tempArr = url.split("/").filter((el) => el !== "");
  const result = tempArr.join(":");

  return result;
}

export function getUpperCodeFromPath(path: string) {
  const arr = path.split(":");
  const url = arr[0];

  const tempArr = url.split("/").filter((el) => el !== "");
  const result = tempArr.slice(0, tempArr.length - 1).join(":");

  return result;
}
