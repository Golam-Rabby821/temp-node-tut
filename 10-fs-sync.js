// fs(file system) is a built-in node module 
// program continues on line by line completion
// main program waits for the read/write to complete

const { readFileSync, writeFileSync } = require("fs");
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second)

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: 'a'} //used to append
);

console.log('done with this task')
console.log('starting the next one')