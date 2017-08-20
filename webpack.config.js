/**
 * Config Webpack by richardcj on 20/8/17.
 */

const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist/")
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.join(__dirname, "node_modules")
            }
        ]
    }
}