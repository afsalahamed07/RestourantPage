const path = require("path"); // node path module
const common = require("./webpack.common");
const merge = require("webpack-merge").merge;

module.exports = merge(common, {
  mode: "production",
  output: {
      // use content hash
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
});
