const path = require("path"); // node path module
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  plugins: [
      // can use templates too
    new HtmlWebpackPlugin({
      title: 'Restourant Page',
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
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "imgs"
        }
      },
    ],
  },
};
