const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/js/index.js"],
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "./build/src/js"),
  },
  watch: false,
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
