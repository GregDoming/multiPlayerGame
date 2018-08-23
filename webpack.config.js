const path = require("path");
const webpack = require("webpack");
//node externals stops nod from bundling on the back end


module.exports = {
  entry: "./index.js",
  mode: "development",
  node: {
    fs: 'empty',
    dns: 'empty',
  },
  //Webpack may assume that the bundle will be running in a node-like environment, 
  //where globals like  global and require are provided by the environment ()maybe causes errors

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env', 'react'] }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },

  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 5000,
    publicPath: "/build/",
    hotOnly: true
  },
  plugins: [ new webpack.HotModuleReplacementPlugin() ]
};