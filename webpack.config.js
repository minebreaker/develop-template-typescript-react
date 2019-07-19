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
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
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
