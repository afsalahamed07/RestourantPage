const path = require("path"); // node path module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    nav: "./src/nav.js",
  },
  plugins: [
      // can use templates too
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      title: 'Restaurant Page',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
