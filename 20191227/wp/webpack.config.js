const path = require('path');
const obj = {
    mode: 'development',
    entry: './1.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: miniCssPlugin.loader
                }, 'css-loader'],
                //排除node_modules
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/'
                    }
                }]
            }
        ]
    },plugins:[
                new HtmlWebpackPlugin({
                    template:'./index.html',
                    filename:'index.html',
                    title:'哈哈',
                    minify:{
                        removeComments: true,
                        collapseWhitespace: true,// 删除空白符与换行符
                        collapseBooleanAttributes: true,////是否简写boolean格式的属性
                        removeAttributeQuotes: true,////是否移除属性的引号 默认false
                    }
                }),
                new miniCssPlugin({
                    filename:'./css/[name].css'
                }),
            ],
            optimization: {
                minimizer: [
        
                    new TerserPlugin({
                        cache: true,
                        parallel: true,
                        sourceMap: true, //
                        terserOptions: {

                        }
                      }),
                    new OptimizeCSSAssetsPlugin({})
                ]
            }
        
}

//导出配置项
module.exports = obj;