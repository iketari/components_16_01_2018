module.exports = {
	entry: './src/main.js',
	output: {
		filename: './dist/bundle.js',
	},
	devtool: 'eval-source-map',
	module: {
		rules: [
			{
				test: /\.pug$/,
				use: 'pug-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						babelrc: false,       // брать настройки из options
						cacheDirectory: false, // включить кширование (node_modules/.cache/babel-loader)
						presets: [
							[
								'env',
								{
									targets: {
										browsers: ['last 2 versions'],
										chrome: 49,
										safari: 9,
									},
									debug: true
								}
							]
						]
					},
				}],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
};
