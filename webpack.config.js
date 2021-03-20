const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = (env = {}) => {

    const { mode = 'development' } = env
  
    const isProd = mode === 'production'
    const isDev = mode === 'development'

    const getStyleLoaders = () => {
        return [
            isProd ? {loader: MiniCssExtractPlugin.loader, options: {publicPath: './'}} : 'style-loader',
            {loader: 'css-loader', options:{sourceMap:true, modules: {localIdentName: "[name]__[local]___[hash:base64:5]"}}},
            {loader: 'resolve-url-loader', options:{sourceMap:true}}
        ]
    }

    const getStyleLoadersForLess = () => {
        return [
            isProd ? {loader: MiniCssExtractPlugin.loader, options: {publicPath: './'}} : 'style-loader',
            {loader: 'css-loader', options:{sourceMap:true}},
            {loader: 'resolve-url-loader', options:{sourceMap:true}}
        ]
    }

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new CleanWebpackPlugin()
        ]

        if (isProd) {
            plugins.push(new MiniCssExtractPlugin({
                    filename: 'main-[hash:8].css',
                })
            )
        }
      
        return plugins;

    }

    return {
        mode: isProd ? 'production': isDev && 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundel.js'
        },
        module: {
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [{loader: 'babel-loader'}]
                },
                // Loading images
                {
                    test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]',
                        }
                    }]
                },
                // Loading fonts
                {
                    test: /\.(ttf|otf|eot|woff|woff2)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]',
                        }
                    }]
                },
                // Loading css
                {
                    test: /\.(css)$/,
                    use: getStyleLoaders()
                },
                // Loading sass/scss
                {
                    test: /\.(less)$/,
                    use: [
                        ...getStyleLoadersForLess(),
                        {loader: 'less-loader', options: {sourceMap: true}}
                    ]
                }
            ]
        },
        plugins: getPlugins(),
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            hot: true,
            open: true,
            contentBase: path.resolve(__dirname, 'dist'),
            port: 3000
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                    terserOptions: {
                        format:{
                            comments: false
                        }
                    },
                    extractComments:false
                })
            ],
        }
    }
}