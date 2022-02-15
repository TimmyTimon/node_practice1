const os = require('os')

//Getting information about the current user 
const user = os.userInfo()
console.log(user)

//method that returns the system uptime in seconds 
console.log(`The system has been running for ${os.uptime()}`)

//Creating an object for the current OS
const currentOS={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);
