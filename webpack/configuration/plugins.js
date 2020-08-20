const HtmlWebpackPlugin = require('html-webpack-plugin')
import { RSA_PKCS1_PSS_PADDING } from 'constants';

const webpack = require('webpack');
const path = require("path");
const HandlebarsWebpackPlugin = require("handlebars-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
console.log("path.join(__dirnamepath.join(__dirnamepath.join(__dirnamepath.join(__dirnamepath.join(__dirname",path.join(__dirname))
const plugins = [
  new HtmlWebpackPlugin({

    // initialState: JSON.stringify({
    //   device: {
    //     isMobile: false
    //   }
    // }),
 
    title: 'My custom title!',
    template: './src/server/views/frontend/index.hbs',
    //filename: 'test.html',
  }),

  new MiniCssExtractPlugin(),

];


export default plugins;
