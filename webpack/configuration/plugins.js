const HtmlWebpackPlugin = require('html-webpack-plugin')
import { RSA_PKCS1_PSS_PADDING } from 'constants';

const webpack = require('webpack');
const path = require("path");
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const plugins = [
  // new webpack.LoaderOptionsPlugin({
  //   options: {
  //     handlebarsLoader: {}
  //   }
  // }),
  new HtmlWebpackPlugin({
    title: 'My custom title!',
    template: './src/server/views/frontend/index.hbs'
  }),

  new MiniCssExtractPlugin(),

];


export default plugins;
