// os(operationg system) is a built-in node module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method to return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)