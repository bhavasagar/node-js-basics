const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.write("Hi, this is my node practice 😍.");
    else if(req.url === '/about') 
        res.write("This is about page 🧐.");
    else
        res.write("I'm not coded yet, ask him not to procrastinate much. 🙂");
    res.end();
});

server.listen(5000);