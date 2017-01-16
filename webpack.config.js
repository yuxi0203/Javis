var path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
        }]
    },
    devServer: { // Make react-router works
        historyApiFallback: true
    }
};