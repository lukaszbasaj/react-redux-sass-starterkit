const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    entry: ['./src/index.js','./src/App.scss'], 
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },        
    plugins: [         
        new CleanWebpackPlugin(['dist']),
         new HtmlWebpackPlugin({
            title: 'MyAppStarter',
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet :'<main class="main" id="app">MyStarterApp</main>'
        }),            
    ]    
}