const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const obj = {
    mode:'development',
    entry:'./zz.js',
    // output:{
    //     path:path.resolve(__dirname,'./build'),
    //     filename:'build.js'
    // },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gig)$/,
                use:[
                    {
                        loader:
                        'file-loader',
                        options:{
                            outputPath:'images/'
                        }
                    }
                ]
            }
        ]
    },devServer:{
        contentBase:'./',//本地服务器所加载的页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true,//实时刷新
        port:8080,
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./da.html'),
            filename:'index.html',
        })
    ]

}

module.exports = obj;