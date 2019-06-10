const path = require("path")


module.exports = {
    entry: {
        "index": "./build/sources/src/index.js"
    },
    output: {
        filename: "[name].js",
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, "build/out")
    },
    mode: "development",
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            }
        ]
    }
}
