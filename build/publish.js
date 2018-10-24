const uploader = require("@newap/uploader");

let name = process.argv.slice(2)[0];
let target;
switch (name) {
case "test":
	target = "lite/test/app/3g-lite";
	break;
case "prod":
	target = "lite/app/3g-lite";
	break;
default:
	target = "lite/test/app/3g-lite";
	break;
}
(async function() {
	await uploader({
		target: target,
		dir: "./dist",
		exclude: [".map", /report\.html/, /^\./, /\.db/]
	});
})();
