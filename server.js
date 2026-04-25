const http = require("http");

const server = http.createServer(function (req,res){

  res.end("hello chutiye");//sending the data to user;
});

server.listen(5000);
