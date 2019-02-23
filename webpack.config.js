const webpack = require('webpack');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve('bin'),
        filename: 'jsr'
    },
    target: 'node',
    plugins: [new webpack.BannerPlugin({
        banner: '#!/usr/bin/env node',
        raw: true
    })]
}