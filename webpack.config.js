module.exports = {
    entry: [
        './views/index.jsx'
    ],
    output: {
        path: __dirname + '/public/bundle/',
        publicPath: "/public/bundle/",
        filename: 'app.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx-loader?harmony'] }
        ]
    }
};