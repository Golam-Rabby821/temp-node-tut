// path is a built-in module called by 'path'
const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/', 'sub-folder', 'text.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolutePath = path.resolve(__dirname, 'content', 'sub-folder', 'text.txt')
console.log(absolutePath)