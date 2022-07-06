// 引入一个包
const path = require('path')

//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack中所有配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/01.ts",

    //指定打包文件所在目录
    output: {
        //指定打包后目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件名字
        filename: "bundle.js"
    },

    //指定webpage打包时要用的模块
    module: {
        //指定要加载的规则
        rules: [{
                //test 指定规则生效文件
                test: /\.ts$/,
                //要使用的loader
                use: 'ts-loader',
                //要排除的文件夹
                exclude: /node-modules/,
                // mode: 'production'
            },
            //设置less文件处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '*', '.css', '.ts'] //现在就没问题了
    },


    //配置webpack插件，导入html
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/01.html"
        }),

    ]
}