const path = require("path"); // node path module
const merge = require("webpack-merge").merge;
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
  devtool: "inline-source-map",
  output: {
      // use content hash
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
});
