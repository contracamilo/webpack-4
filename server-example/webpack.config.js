const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: { 
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist_plugin_entry'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html'
        })
    ],
    devServer: {
        hot: true,
        open: true,
        port: 9000
    }
}