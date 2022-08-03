// function calc(first, ...rest) {
//   const fs = require('fs');
//   let arrayParams = [];
//
//   for (let i = 0; i < arguments.length; i++) {
//     arrayParams.push(arguments[i]);
//   }
//
//   let convertArrayToString = arrayParams.join('');
//   const result = eval(convertArrayToString).toString();
//
//
// }
//
// module.exports = {calc};

const fs = require('fs')
let fileContent = fs.readFileSync("input.json", "utf8");
let convertArrayToString = JSON.parse(fileContent).join('');
const result = eval(convertArrayToString).toString();
fs.writeFileSync("output.json", JSON.stringify(result));


