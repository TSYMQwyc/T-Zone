const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 3030
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(),
        // new HtmlWebpackPlugin({ title: '管理输出' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']},
            {test: /\.(png|svg|jpg|gif)$/, loader: ['file-loader'] }
        ]
    }
    
};