const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const contextPath = path.resolve(__dirname, "../src");
const distPath = path.resolve(__dirname, "../dist");
const htmlPath = path.resolve(contextPath, "index.html");
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css');

module.exports = {
    context: contextPath,
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: distPath,
        publicPath: './'
    },

    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: contextPath,
                exclude: /node_modules/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: ['@babel/preset-react','@babel/preset-env'],
                    cacheDirectory: true,
                    cacheCompression: false,
                }
            },
            {
                test: /\.glsl$/,
                use: 'raw-loader' // string|array  array from right to left
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: htmlPath,
            inject: 'body'
        }),
        extractCSS,
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0
                },
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
