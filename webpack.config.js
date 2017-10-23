module.exports = {
	entry: "./main.js",
	output: {
		filename: "./bundle.js"
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "buble-loader",
				query: {
					objectAssign: "Object.assign"
				}
			},

			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "css-loader"
			}
		]
	}
};
