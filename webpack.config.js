const path = require('path')
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'V.js',
    publicPath:'/'
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: ['transform-runtime']
          }
        }
       }
    ]
  },
  devServer: {
    port: 8081
    
  }
}