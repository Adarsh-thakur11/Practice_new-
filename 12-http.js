const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.end("welcome ");
    }
    if(req.url==="/about"){
        res.end("about page")
    }
    res.end(`<h1>Oops!</h1>
    <p>we cant seem to find the page </p>
    <a href="/">back home</a> `)

})
server.listen(5000)
