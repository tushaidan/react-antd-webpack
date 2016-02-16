var webpack = require('webpack');

module.exports  = {
	entry : './src/entry/main.js',

	output:{
		path:__dirname,
		filename:'bundle.js'
	},

	resolve:{
		exceptions:['','.css','.js']
	},

	module:{
		loaders:[
			{test: require.resolve('jquery'), loader: 'expose?jQuery'},
			{test: /\.js$/,loader: 'babel-loader',
			exclude: /node_modules/,
        	query: {
          		presets: ['es2015', 'react']
        	}}, //凡是 .js 结尾的文件都是用 babel-loader 做处理
			{ test: /\.css$/, loaders: ['style-loader','css-loader'] },
			{ test: /\.less$/, loader: 'less'}
		]
	}
}