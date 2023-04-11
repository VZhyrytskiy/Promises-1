const path = require('path');

module.exports = {
  mode: "development",
	devtool: "inline-source-map",
	devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
		port: 3000,
		open: true,
		compress: true
  },
  entry: "./src/js/index.js",
  output: {
    filename: "index.js"
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
};
