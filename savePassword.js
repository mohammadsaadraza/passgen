const fs = require("fs");
const path = require("path");
const os = require("os");
const chalk = require("chalk");

const savePassword = (filename, password) => {
	fs.open(path.join(__dirname, filename + ".txt"), "a", 666, (e, id) => {
		fs.write(id, password + os.EOL, null, "utf-8", () => {
			fs.close(id, () => {
				console.log(chalk.yellow(`Saved to file ${filename + ".txt"}`));
			});
		});
	});
};

module.exports = savePassword;
