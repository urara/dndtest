module.exports = {
  entry: {
    javascript: "./src/main.js",
  },

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js']
  }
}
