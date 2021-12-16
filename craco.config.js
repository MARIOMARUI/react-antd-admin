/**
 * @Date 2021-06-10 09:36:47
 * @Remark
 */

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

// 不自动打开浏览器
process.env.BROWSER = "none";
process.env.GENERATE_SOURCEMAP = false;

module.exports = function () {
  const isProductionBuild = process.env.NODE_ENV === "production";

  const webpackPlugins = [];

  if (isProductionBuild) {
    // webpackPlugins.push(new BundleAnalyzerPlugin({ analyzerMode: "server" }));
  }

  return {
    plugins: [
      {
        plugin: CracoAntDesignPlugin,
        options: {
          customizeThemeLessPath: path.join(__dirname, "src/style/theme.less"),
          babelPluginImportOptions: {
            libraryDirectory: "es",
          },
        },
      },
    ],
    webpack: {
      plugins: webpackPlugins,
    },
  };
};
