const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = () => {
  return {
    entry: path.join(__dirname, '/entry-server.js'),
    output: {
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new VueSSRServerPlugin()
    ],
    resolve: {
      extensions: ['.js', '.vue']
    }
  }
}
