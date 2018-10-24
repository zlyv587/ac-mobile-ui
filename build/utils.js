const fs = require("fs");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const packageJsonPath = path.resolve(__dirname, "../package.json");

function getEntries() {
	let packageJson = JSON.parse(fs.readFileSync(packageJsonPath));
	return packageJson.pages;
}

function getHTMLPlugin(entry) {
	return new HtmlWebpackPlugin({
		filename: `${entry}.html`,
		template: `src/${entry}/index.html`,
		chunks: ["styles", "vendors", "commons", entry],
		minify: {
			minifyCSS: true,
			removeComments: true,
			collapseWhitespace: true,
			removeAttributeQuotes: true
		},
	});
}

function getDevEntry(entry) {
	return {
		[entry]: [`./src/${entry}/index.js`]
	};
}

function getHTML(entries) {
	if (!entries) return getEntries().map(getHTMLPlugin);
	return entries.map(getHTMLPlugin);
}

function getDevEntries(entries) {
	let entriesArr = entries
		? entries.map(getDevEntry)
		: getEntries().map(getDevEntry);
	return entriesArr.reduce((pre, cur) => {
		return { ...pre, ...cur };
	}, {});
}

function getProdEntries(entries) {
	let devEntries = getDevEntries(entries);
	for (let entry in devEntries) {
		devEntries[entry].unshift("babel-polyfill");
	}

	return { ...devEntries };
}

module.exports = {
	getEntries,
	getDevEntries,
	getProdEntries,
	getHTMLPlugin,
	getHTML
};
