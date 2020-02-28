const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const contextPath = path.resolve(__dirname, "../src");
const distPath = path.resolve(__dirname, "../dist");
const htmlPath = path.resolve(contextPath, "index.html");
const ico = path.resolve(contextPath, "favicon.ico");
const PUBLIC_URL = process.env.PUBLIC_URL || '/';

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
                    presets: ['@babel/preset-react', '@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-export-default-from',
                        "@babel/plugin-transform-runtime",
                        ["prismjs", {
                            "languages": ["javascript", "css", "markup"],
                            "plugins": ["line-numbers"],
                            "theme": "twilight",
                            "css": true
                        }]
                    ],
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
                use: [
                    process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : "style-loader",//hmr can't work in .css file when use MiniCssExtractPlugin
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require("autoprefixer")
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.svg$/,
                use: [
                    "babel-loader",
                    {
                        loader: "react-svg-loader",
                        options: {
                            svgo: {
                                plugins: [
                                    {removeTitle: false}
                                ],
                                floatPrecision: 2
                            }
                        }
                    }
                ]
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
            inject: 'body',
            favicon: ico,
        }),
        new webpack.DefinePlugin({
            'process.env.PUBLIC_URL': JSON.stringify(PUBLIC_URL)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        })
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
