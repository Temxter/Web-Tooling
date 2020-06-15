const path = require('path')

module.export = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hashcontent].js',
        path: path.resolve(__dirname, 'dist')
    }
}