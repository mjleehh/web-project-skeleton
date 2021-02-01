const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const path = require('path')

const OUTPUT_FOLDER = path.join(__dirname, 'dist')
const INDEX_HTML = path.join(__dirname, '/index.html')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: OUTPUT_FOLDER,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from: 'app.yaml'}]
        }),
        new HtmlWebpackPlugin({template: INDEX_HTML}),
        new CleanWebpackPlugin(),
        new ESLintPlugin({extensions: ['js', 'jsx', 'ts', 'tsx']}),
    ],
    devtool: 'source-map',
}
