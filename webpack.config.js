const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //Изменить на 'production' после завершения разработки
  entry: './src/index.js', 
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({ //Создание из html файла html с подключёнными скриптами и стилями
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'), 
        filename: 'index.html',
    }),
],
}