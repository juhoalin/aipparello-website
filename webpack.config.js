const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/configuration.html",
            filename: "webflow.serve.html",
            inject: false,
        }),
    ],
    mode: "production",
    entry: {
        ["webflow.serve"]: "./src/configuration.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "[name]",
        libraryTarget: "umd",
        globalObject: "this",
        umdNamedDefine: true,
        clean: true,
    },
};
