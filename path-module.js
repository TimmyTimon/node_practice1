const path= require('path')

console.log(path.sep)

const filePath = path.join('\TestFolder/','TestSubfolder','Test.txt')

console.log(filePath)

//Getting the base name 
const base = path.basename(filePath)
console.log(base);

//Getting the absolute path
const absolute = path.resolve(__dirname,'TestFolder','TestSubfolder','Test.txt')
console.log(absolute)