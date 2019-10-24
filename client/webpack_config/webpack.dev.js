process.env.NODE_ENV = 'development';

const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const devConfig = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(devConfig, options);

const compiler = webpack(devConfig);
const server = new webpackDevServer(compiler, options);

server.listen(8080, 'localhost', () => {
    console.log('dev server listening on port 8080');
});
