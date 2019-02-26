const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
            // css
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
            // images
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
					/* {
						loader: 'url-loader',
						options: {
							fallback: 'file-loader',
						},
					},*/
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true, // webpack@2.x and newer
						},
					},
				],
			},
		],
	},
};
