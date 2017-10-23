module.exports = {
	entry: "./main.js",
	output: {
		filename: "./bundle.js"
	},
	watch: true,
	loaders: [
		{
			test: /.js$/,
			loaders: "buble",
		//include: path.join(__dirname, 'src'),
			exclude: /node_modules/,
			query: {
				objectAssign: 'Object.assign'
			}
		}
	]
};
