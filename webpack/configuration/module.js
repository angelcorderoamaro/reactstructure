const path = require('path')
const rules = [
  {
    test: /\.(jsx|js)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
   { test: /\.hbs$/, loader: "handlebars-loader" },
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader'
      }

    ],
    include: /\.module\.css$/
  },{
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ],
    exclude: /\.module\.css$/
  }, {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    use: 'file-loader'
    // loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  }
 
];

export default {
  rules
};