const path = require("path");
const json5 = require("json5");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        site: "./src/js/site.js",
        bootstrap: './src/js/bootstrap.js',
        validation: './src/js/validation.js',
        home: './src/js/home.js'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, '..', 'wwwroot', "dist"),
    },
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [{ loader: MiniCssExtraPlugin.loader }, "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.json5$/i,
                type: "json",
                parser: {
                    parse: json5.parse,
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtraPlugin({
            filename: "[name].css"
        })
    ]
};