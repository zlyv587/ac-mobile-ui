/**
 * Created by Lzhang on 2018/8/22.
 */
const uploader = require("@newap/uploader");

let name = process.argv.slice(2)[0],
    target;

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
target = "lite/test/app/3g-lite";

(async function() {
	await uploader({
		target: target,
		dir: "./online",
		exclude: [".map", /report\.html/, /^\./, /\.db/]
	});
})();
