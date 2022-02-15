const {readFileSync, writeFileSync, read} = require('fs')

const first = readFileSync('./TestFolder/First.txt','utf8')
const second = readFileSync('./TestFolder/Second.txt','utf8')

console.log(first)
console.log('<h2>The Second File</h2>',second)


//Writing into the file 
writeFileSync(
    './TestFolder/Sync-FileTest',`The result will be 
    ${first},${second}`)
    
