const glob = require('glob');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: glob.sync('./src/*.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
