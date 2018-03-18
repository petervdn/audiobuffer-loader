const path = require('path');

console.log('path', path.join(__dirname, 'src'));
module.exports = {
  devServer: {
    contentBase: './'
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: 'ts-loader',
      }
    ]
  }
};
