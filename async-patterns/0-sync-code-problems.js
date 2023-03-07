import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log("Home Page");
        res.end("Home Page");
    }
    if (req.url === '/about') {
        console.log("About Page");
        res.end("About Page");
    }
    if (req.url === '/services') { 
        // Blocking Code.
        longFunction();
        console.log("Services Page");
        res.end("Services Page");
    }
});

function longFunction() {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            console.log(`${i}-${j}`);
        }
    }
}

server.listen(5000, () => {
    console.log("Server listening on: http://localhost:5000/ ");
})