const path = require("path"); // node path module
const common = require("./webpack.common");
const merge = require("webpack-merge");

module.exports = merge(common, {
  mode: "produciton",
  output: {
      // use content hash
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
});
