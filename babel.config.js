module.exports = {
    presets: [
        ["@babel/preset-env", { targets: "> 1%, not dead" }]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
    ]
}
