var path = require('path');

var config = {
   entry: './App.js',

   output: {
      path:path.resolve(__dirname, ''),
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      host: '172.16.119.128',
      port: 3000
   },
   devtool: "source-map",
   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
