var BrowserSyncPlugin = require('browser-sync-webpack-plugin')
module.exports = {
	entry: "./public/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
  // ... 
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development, 
      // ./public directory is being served 
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['public'] },
      reload: false
    })
  ],
  module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
}
