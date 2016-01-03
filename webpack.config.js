var path = require('path');
module.exports = {
    context: __dirname + "/src",
    entry: './app.jsx',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    //devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["babel"]
            },
            //SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }

        ]
    }
};