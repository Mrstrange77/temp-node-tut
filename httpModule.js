const http=require('http');

const server =http.createServer((req,res)=>{
  if(req.url==='/'){
    res.end('welcome to homepage ')
    return;
  }
  if(req.url==='/about'){
    res.end('about the history')
    return;
  }
  res.end(`
    <h1>NOT FOUND</h1>
    <a href="./">back home</a>
    `)
  

})
server.listen(5000);