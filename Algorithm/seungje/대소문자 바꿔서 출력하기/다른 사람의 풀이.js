const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  const regex = /[A-Z]/;
  // const array = []
  // for (let i = 0; i < str.length; i++) {
  //     regex.test(str[i]) ? array.push(str[i].toLowerCase()) : array.push(str[i].toUpperCase());
  // }
  // console.log(array.join(''))
  console.log(
    [...str]
      .map((v) => (regex.test(v) ? v.toLowerCase() : v.toUpperCase()))
      .join("")
  );
});
