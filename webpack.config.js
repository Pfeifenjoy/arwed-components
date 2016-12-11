var path = require("path")
var webpack = require("webpack")

module.exports = {
    devtool: "source-map",
    entry: {
        polyfill: "babel-polyfill",
        index: "./src/index.js",
        vendor: ["react"]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/build/"),
        publicPath: "/build/"
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",

                include: [
                    path.resolve(__dirname, "src")
                ],

                test: /\.jsx?$/,

                query: {
                    plugins: ["transform-runtime"],
                }
            }
        ]
    },
}
