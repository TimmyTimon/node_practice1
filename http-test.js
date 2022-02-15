const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page!')
    }
    if(req.url === '/about'){
        res.end('Learn everything there is to know about us!')
    }
    res.end(`
     <h1> Page Not Found!</h1>
     <p>We could not find the page you were looking for</p>
     <a href="/" style='button'>Go Back To Home Page</a>
    `)
})

//Starting the port for the server 
server.listen(5000)
