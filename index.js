const http = require('http');

let app = require('./src/routes')
let server = http.createServer(app);


let port= process.env.PORT || 5000;
server.listen(port,(req,res)=>{
    console.log("http://localhost:5000")
})