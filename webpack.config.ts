const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (_env, arg) => {
	const isProduction = arg.mode === "production";

	const webpackConfig = {
		mode: "development",
		entry: "./src/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].bundle.[contenthash:5].js"
		},
		module: {
			rules: [
				configureMainStyles(!isProduction),
				configureChildStyles(!isProduction),
				...configureTypescript(),
			]
		},
		devServer: {
			port: 3000,
			historyApiFallback: true
		},
		...configureBundleProcess(isProduction),
		stats: configureLogStats(),
		plugins: [
			new HtmlWebpackPlugin({ template: "src/index.html" }),
			new MiniCssExtractPlugin({ filename: "[name].bundle.[contenthash:5].css" })
		]
	}

	if (isProduction) { configureProduction(webpackConfig); }

	return webpackConfig;
};

/**
 * This applies to the main SCSS stylesheet named `global.scss`
 * since `globals.scss` is imported without the `modular` argument
 *
 * @param {boolean} sourceMap generates a source map for the stylesheets
 */
function configureMainStyles(sourceMap) {
	return {
		test: /global\.scss$/,
		loader: [MiniCssExtractPlugin.loader, {
			loader: "css-loader",
			options: { sourceMap }
		}, {
			loader: "sass-loader",
			options: { sourceMap }
		}]
	}
}

/**
 * This applies to all SCSS stylesheets except `global.scss`
 *
 * @param {boolean} sourceMap generates a source map for the stylesheets
 */
function configureChildStyles(sourceMap) {
	return {
		test: /^((?!global).)*scss$/,
		loader: [MiniCssExtractPlugin.loader, {
			loader: "css-loader",
			options: { modules: true, sourceMap }
		}, {
			loader: "sass-loader",
			options: { sourceMap }
		}]
	}
}

/**
 * This configures TypeScript loaders and linters
 */
function configureTypescript() {
	const lintingRules = {
		rules: {
			indent: [ true, "tabs", 2 ],
			quotemark: [ true, "double", "jsx-double" ],
			semicolon: [ true, "always" ],
			"max-line-length": [ true, 100 ]
		}
	}

	return [{
		test: /\.ts(x?)$/,
		loader: ["ts-loader", {
			loader: "tslint-loader",
			options: {
				configuration: lintingRules,
				formatter: "grouped",
				formattersDirectory: 'node_modules/custom-tslint-formatters/formatters/',
			}
		}]
	}, {
		enforce: "pre",
		test: /\.js$/,
		loader: "source-map-loader"
	}];
}

/**
 * This configures files resolution and bundle options
 *
 * @param {boolean} isProduction removes checking of vendors size when not on production
 */
function configureBundleProcess(isProduction) {
	const KB = 1024;
	const bundleConfig = {
		resolve: { extensions: [".ts", ".tsx", ".js"] },
		optimization: { splitChunks: { chunks: "all" } },
		performance: {
			hints: (isProduction) ? "warning" : false,
			maxEntrypointSize: 320 * KB,
			maxAssetSize: 300 * KB,
			assetFilter: (file) => !(/\.map$/.test(file))
		},
	}

	if (!isProduction) {
		bundleConfig.performance.assetFilter = (file) => !(/\.map$|vendors/.test(file));
	}

	return bundleConfig;
}

/**
 * This configures webpack log content
 */
function configureLogStats() {
	return {
		children: false, // Disable children information
		chunks: false,   // Disable chunk information
		colors: true,    // Enable colored output on terminal
		hash: false,     // Disable compilation hash
		modules: false,  // Disable module information
		version: false   // Disable printing of webpack version
	}
}

/**
 * This configures production settings and plugins
 *
 * @param {object} webpackConfig webpack configuration object
 */
function configureProduction(webpackConfig) {
	webpackConfig.plugins.push(new TerserPlugin({
		extractComments: false,
		terserOptions: { output: { comments: false } }
	}));
	webpackConfig.plugins.push(new CleanWebpackPlugin());
	webpackConfig.plugins.push(new CopyPlugin([
		{ from: "assets", to: "assets", ignore: ["_redirects", "robots.txt"], },
		{ from: "assets/_redirects", to: "_redirects", toType: "file" },
		{ from: "assets/robots.txt", to: "robots.txt", toType: "file" }
	]));
}
