const {readFile, writeFile,} = require('fs')

readFile('./TestFolder/First.txt','utf-8',(err,result)=>{
  
    if(err){
        console.log(err)
        return;
    }
    console.log(result)

    const first = result;
    readFile('./TestFolder/Second.txt','utf-8',(err,result) =>{
        if(err){
            console.log(err)
            return;
        }
        console.log(result)
    
        const second = result;

        //The writeFile function 
        writeFile('./TestFolder/Trial.txt',`The result of the trial file will be 
        ${first},${second}`, (err,result) =>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
});
