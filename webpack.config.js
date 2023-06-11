const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
            },
        ],
    },
    output: {
        filename: 'bundle.js',      // bundle.[contenthash].js
        path: path.resolve(__dirname, 'dist'),  // constructing an absolute path
        publicPath: '/dist/'
    },
    devtool: 'inline-source-map',  // this tells webpack that there will be generated sourcemaps already which it should extract and basically wire up correctly to the bundle it generates
    module: {
        rules: [
            {
                test: /\.tsx?$/,   // check for files that end with .ts
                use: 'ts-loader',   // any .ts files that it finds will be handled by the ts-loader
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};