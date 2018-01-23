const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = options => {
    return {
        entry: './client/index.js',
        output: {
            path: path.resolve(__dirname, 'public/dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
              {
                test: /.js$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      cacheDirectory: true,
                    },
                  },
                ],
              },
            ],
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: './client/index.html',
                to: '../index.html'
            }])
        ],
    }
}