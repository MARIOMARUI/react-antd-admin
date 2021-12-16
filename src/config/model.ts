/**
 * @Date 2021-06-28 10:35:00
 * @Remark block1
 */

export type AppMode = "DEV" | "PROD" | "BETA";

export interface AppModeMap {
  DEV: AppMode; // 开发环境
  PROD: AppMode; // 生产环境
  BETA: AppMode; // 测试环境
}

export const APP_MODE_MAP: AppModeMap = {
  DEV: "DEV", // 开发环境
  PROD: "PROD", // 生产环境
  BETA: "BETA", // 测试环境
};

export interface Domain {
  // web开发不需要
}
