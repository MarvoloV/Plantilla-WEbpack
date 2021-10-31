const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/** @type {import('webpack').Configuration} */
module.exports={
    mode:'development',
    entry:['./src/index.js'],
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
    },
    resolve:{
        extensions:['.js'],
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [   MiniCssExtractPlugin.loader,
                        'css-loader',
                     ],
            },
            {
                test: /\.png/,
                type: 'asset/resource'
              },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                inject:true,
                template: './public/index.html',
                filename:'./index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename:'assets/[name][contenthash].css'}),
        /* new CopyPlugin({
            patterns: [
              { from: './src/styles/style.css', to: '' },
            ],
          }), */
    ]
}