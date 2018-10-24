const Wds = require("webpack-dev-server");
const webpack = require("webpack");
const getWebpackConfig = require("./conf/webpack.config.dev");
const path = require("path");

let entries = process.argv.slice(2);
if (!entries.length) entries = null;

const devConfig = getWebpackConfig(entries);
const options = {
	compress: true,
	publicPath: "/",
	contentBase: path.join(__dirname, "../"),
	port: 8081,
	hot: true,
	host: "dev.3g.163.com",
	proxy: {
		'/lite/': {
			// target: 'http://10.234.128.139:8181',
			target:  'http://t.c.m.163.com/',
			// target:  'http://t1.c.m.163.com:8080',
			// pathRewrite: {'^/api': ''}
			changeOrigin: true,
		}
	}
};

Wds.addDevServerEntrypoints(devConfig, options);

const compiler = webpack(devConfig);
const server = new Wds(compiler, options);

server.listen(8081, "dev.3g.163.com", () => {
	console.log("server started");
});
