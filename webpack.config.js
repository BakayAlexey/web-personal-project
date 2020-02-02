const path = require('path');

let conf = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'index.js?[hash]',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ]
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~c': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
};

module.exports = conf;