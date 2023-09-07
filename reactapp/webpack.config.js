let path = require("path"); //path module of node framework
HtmlWebpackPlugin = require('html-webpack-plugin'),
config = {
    output: {
        path: path.join(__dirname, "/dist"), //dist - distribution
        filename:"index.bundle.js"
    },
    //webpack 5 comes with devServer which loads in development mode
    //api/helloworld >>> 
    //api/params
    //default method is GET
    //open the port
    devServer: {
        port:9090,
        historyApiFallback : true //localhost:9090/user 
    },
    //Rules of how webpack will take our files, compile & bundle them for the brwoser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                  loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]
}

module.exports = config;