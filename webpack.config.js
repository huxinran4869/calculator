var path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                compact: false,
                presets: ['react']
            }
        }]
    }
};
