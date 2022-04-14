const path = require("path");

const { DefinePlugin } = require("webpack");

const ENV = {
  "process.env": {
    PUBLIC_PATH: JSON.stringify("/"),
  },
};

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "..", "./dist"),
    filename: "bundle.[fullhash].js",
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [new DefinePlugin(ENV)],
};
