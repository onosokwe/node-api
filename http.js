const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);
    if(req.url == '/'){
        res.write('<h1>Hello Omalicha</h1>');
    }else {
        res.write('<h1>Another url seen</h1>');
    }
    res.end();
})

server.listen(3000)