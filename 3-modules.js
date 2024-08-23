// CommonJs, every file is module (by default) [node use CommonJS]
// Modules - Encapsulated Code (only share minimum)

// const names = require('./4-names');
const { john, peter } = require("./4-names");
const sayHi = require("./5-utills");
const data = require("./6-alternativeExports");
require("./7-mindGrenade"); // This actually runs the invoked func in the module

// console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

// sayHi(john)
// sayHi(peter)
