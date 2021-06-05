// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chalk = require("chalk");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {
  proxy,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require("./proxy");

const rd = process.env.npm_config_rd || "default";
console.log(
  chalk.blue("连接代理服务端： ") +
  chalk.cyan(rd) +
  "  " +
  chalk.green(proxy[rd])
);

module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      "/api/": {
        rewrite: (path) => path.replace(/^\/api/, ""),
        target: proxy[rd],
        changeOrigin: true,
      },
    },
  },
};