const validator = require('validator');
const getNotes = require('./notes');
const chalk = require('chalk');
const msg = getNotes();
console.log(msg);
console.log("Valid Email Id : ", validator.isEmail('kumar@test.com'));
console.log("Invalid Email Id : ", validator.isEmail('test.com'));

console.log("Valid Url : ", validator.isURL('http://test.com'));
console.log("Invalid Url : ", validator.isURL('test.com'));

console.log(chalk.bgGreen("Success!!"));
console.log(chalk.green("Success!!"));
console.log(chalk.green.bold("Success!!"))
console.log(chalk.blue.bold.inverse("Success!!"));

console.log(chalk.bold("Something went wrong!!!"));
console.log(chalk.bgKeyword('red')('Some orange text'));


