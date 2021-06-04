const path = require("path");
const chalk = require("chalk");
const { proxy } = require('./proxy');

const rd = process.env.npm_config_rd || 'default'
console.log(chalk.blue("连接代理服务端： ") + chalk.cyan(rd) + '  ' + chalk.green(proxy[rd]));

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", path.resolve(__dirname, 'src'))
      .set('@api', path.resolve(__dirname, 'src/api'))
  },
  devServer: {
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: {
      "/api/": {
        rewrite: (path) => path.replace(/^\/api/, ''),
        target: proxy[rd],
        changeOrigin: true
      },
    },
  },
};
