/*
 * @Descripttion:
 * @version:
 * @Author: marui
 * @Date: 2021-08-16 11:42:32
 * @LastEditTime: 2021-10-20 14:24:23
 */
/**
 * @Date 2021-06-18 10:42:20
 * @Remark 本地代理配置
 */

const { createProxyMiddleware } = require("http-proxy-middleware");

// const devTarget = "http://192.168.0.135:58880/"; // 吕
// const devTarget = "http://192.168.0.161:58888/";
// const devTarget = "http://192.168.0.245:58888/";
const devTarget = "http://192.168.0.84:58888/";
const betaTarget = "http://182.151.61.116:58880/";
// const prodTarget = "https://admin.xxx.com/";
// 修改代理目标
const target = betaTarget;

module.exports = (app) => {
  app.use(
    "/li_dian",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    }),
  );
};
