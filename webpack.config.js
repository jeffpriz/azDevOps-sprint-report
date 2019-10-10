"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
    entry: {
        MyComponent: "./src/components/MyComponent.jsx",
        spinner: "./src/components/spinner.jsx",
        app: "./src/app.jsx",
        main: "./src/main.jsx"
    }, 
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
                resolve: {
                    extensions: ['.js', '.jsx']
                }
            }
        ]
    },
    
    devtool: "inline-source-map",
    plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

