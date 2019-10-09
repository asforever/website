const express = require('express');
const webpack = require('webpack');
const common = require('./webpack.common.js');


const merge = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
});
