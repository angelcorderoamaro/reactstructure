// //Dependencias

// import webpack from 'webpack';
// import path from 'path';
// import ChunksPlugin from 'webpack-split-chunks';
// //Enviroment
// const isDevelopment = process.env.NODE_ENV !== 'production';
// //paths
// const PATHS = {
//   index: path.join(__dirname, 'src/index'),
//   build: path.join(__dirname, '/src/public'),
//   src: path.join(__dirname, 'src')
// }

// const getDevtool = () => 'cheap-module-eval-source-map'
// const getEntry = () => {
//   const entry = [
//     PATHS.index
//   ];
//   if (isDevelopment) {
//     entry.push('webpack-hot-middleware/client?reload=true');
//   }
//   return entry;
// }
// const getOuput = () => ({
//   path: PATHS.build,
//   publicPath: '/',
//   filename: '[name].bundle.js'

// })

// const getPlugins = () => {
//   const plugins = [
//     new ChunksPlugin({
//       to: 'vendor',
//       test: /node_modules/
//     })
//   ];
//   if (isDevelopment) {
//     plugins.push(
//       new webpack.HotModuleReplacementPlugin(),
//       new webpack.NoEmitOnErrorsPlugin()
//     )
//   } else {
//     plugins.push(
//       new webpack.optimize.UglifyJsPlugin({
//         compress: {
//           screw_ie8: true,
//           warging: false
//         }
//       })
//     )
//   }
//   return plugins;
// };

// const getLoaders = () => ({ 
//     rules: [
//       {
//         test: /\.js?$/,
//         loader: ['babel-loader'],
//         include: PATHS.src
//       },
//       {
//         test: /(\.css)$/,
//         loader: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
//         loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
//       }
//     ]
// })
// //webpacl config
// export default {
//   devtool: getDevtool(),
//   entry: getEntry(),
//   output: getOuput(),
//   plugins: getPlugins(),
//   module: getLoaders()

// };



import {
  devtool,
  module,
  optimization,
  plugins,
  resolve,
  target
} from './webpack/configuration';

export default {
  devtool,
  module,
  optimization,
  plugins,
  resolve,
  target,
  mode: 'development'
};