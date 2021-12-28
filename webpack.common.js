const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    nav: "./src/bundle/nav.js",
    home: "./src/bundle/home.js",
    menu: "./src/bundle/menu.js",
    contact: "./src/bundle/contact.js",
  },
  plugins: [
      // can use templates too
    new HtmlWebpackPlugin({
      template: "./src/template/template.html",
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
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
