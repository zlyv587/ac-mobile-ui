const webpack = require("webpack");
const shell = require("shelljs");

const webpackTestConfig = require("./conf/webpack.config.test");
const webpackProdConfig = require("./conf/webpack.config.prod");

let mode = process.argv.slice(2);
let entries = process.argv.slice(3);

if (!entries.length) entries = null;

if (mode.length) mode = mode[0];

let buildConfig;
switch (mode) {
case "test":
	buildConfig = webpackTestConfig(entries);
	break;
case "prod":
	buildConfig = webpackProdConfig(entries);
	break;
default:
	buildConfig = webpackTestConfig(entries);
	break;
}
console.log("🐒 \u001b[32m Clean the dist folder...");
shell.rm("-rf", "dist");
console.log("🐒 \u001b[32m Start...");

webpack(buildConfig, (err, stats) => {
	if (err || stats.hasErrors()) {
		console.log(`error:${err}`);
	}
	console.log(
		stats.toString({
			chunks: false, // Makes the build much quieter
			colors: true // Shows colors in the console
		})
	);
	console.log("🐒 \u001b[32m Done...!");
});
