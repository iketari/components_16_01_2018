module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
				],
			},
			// {
			// 	test: /\.pug$/,
			// 	use: [
			// 		{ loader: 'pug-loader' }
			// 	],
			// },
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/env', {
			// 				targets: {
			// 					browsers: [
			// 						'last 2 versions',
			// 						'not IE <= 10',
			// 					],
			// 				},
			// 			}],
			// 		}
			// 	}
			// }
		],
	},
};
