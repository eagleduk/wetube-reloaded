const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  watch: true,
  entry: {
    main: "./src/client/js/main.js",
    videoController: "./src/client/js/videoController.js",
    commentSection: "./src/client/js/commentSection.js",
  },
  output: {
    path: path.resolve(__dirname, "asset"),
    filename: "js/[name].js",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
};
