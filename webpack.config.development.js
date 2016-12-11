const pkg = require("./package")
const path = require("path")
const webpack = require("webpack")
const autoprefixer = require("autoprefixer")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    context: __dirname,
    devtool: "inline-source-map",
    entry: [
        "webpack-hot-middleware/client",
        "./spec/index.js"
    ],
    output: {
        path: path.join(__dirname, "build"),
        filename: "spec.js",
        publicPath: "/build/"
    },
    resolve: {
        extensions: ["", ".less", ".js", ".json"],
        packageMains: ["browser", "web", "browserify", "main", "style"]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel",
                exclude: [/(node_modules)/, /react-css-themr/]
            },
            {
                test: /\.(less|css)$/,
                loader: "style!css!postcss!less"
            }
        ]
    },
    postcss: [autoprefixer],
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
}
