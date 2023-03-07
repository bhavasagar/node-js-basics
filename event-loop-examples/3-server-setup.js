const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request Event");
    res.end("A response to you back...");
});
``
server.listen(5000, () => console.log("Server Listenting on port: 5000\nhttp://localhost:5000/"));