#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");
const clipboardy = require("clipboardy");

const createPassword = require("./createPassword");
const savePassword = require("./savePassword");

program
	.version("1.0.0")
	.description("An Easy to use Password Generator for your Accounts");

program
	.option("-l, --length <number>", "length of password", "8")
	.option(
		"-s, --save <string>",
		"save password in generated.txt",
		"generated"
	)
	.option("-nn, --no-numbers", "dont use numbers in passwords")
	.option("-ns, --no-symbols", "dont use special characters in passwords")
	.parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);
clipboardy.writeSync(generatedPassword);

if (save) {
	savePassword(save, generatedPassword);
}

console.log(
	chalk.red.bold("Generated Password: ") + chalk.bold(generatedPassword)
);
console.log(chalk.green.bold("Copied to ClipBoard"));
