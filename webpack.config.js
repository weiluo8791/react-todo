var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    script: './src/script.jsx'
  },	
	output: {
    filename: '[name].js',
    path: path.resolve('./')
  },
	module: {
	  rules: [
		{
		  test: /\.jsx$/,
		  exclude: /(node_modules|bower_components)/,
		  use: {
			loader: 'babel-loader'
/* 			options: {
				presets: ['@babel/preset-env']
				//presets: ['react', 'es2015']
				//presets: ['@babel/preset-react']
			} */
		  }
		}
	  ]
	},	
	stats: {
		colors: true
	},
	//devtool: 'source-map',
	mode: 'development'
};

