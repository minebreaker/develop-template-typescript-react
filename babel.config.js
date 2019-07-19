module.exports = {
    presets: [
        ["@babel/preset-env", { targets: "> 1%, not dead", useBuiltIns: "entry", corejs: 3 }]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
    ]
}
