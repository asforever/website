process.env.NODE_ENV = 'production';

const common = require('./webpack.common.js');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
                {from: path.join(__dirname, "../src/assets"), to: path.join(__dirname, "../dist")},
            ],
        }),
    ],
});