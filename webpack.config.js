const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api/**': {
        target: 'http://api.stackexchange.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.png?$/,
        loader: 'file-loader'
      },
      {
        test: /\.(pcss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('postcss-nested'),
                  require('postcss-nested'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      },


      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015', 'react', 'stage-2'],
            plugins: ['transform-class-properties', ['transform-runtime', {
              'polyfill': false,
              'regenerator': true
            }]]
          }
        }]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  plugins: [
    new ExtractTextPlugin('bundle.[hash].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
