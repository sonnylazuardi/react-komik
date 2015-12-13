var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist/',
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};