const http = require("http");

const server = http.createServer(function (req,res){
  if(req.url==="/getdata"){
    res.end("ma kaa bhosda lawde");
  }
  res.end("hello chutiye");//sending the data to user;
});

server.listen(5000);
