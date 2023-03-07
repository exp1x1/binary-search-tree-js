const path = require("path");

module.exports = {
  entry: "./binaryTree/tree.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
