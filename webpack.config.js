module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + "/dist",
        filename: "out.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
}
