function reqListener(req, res) {
    res.end('<b>' + Date() + '</b>');
}

function initMessage() {
    console.log('Server is running...');
}

//const http = require('http');
import http from 'http';
const server = http.createServer(reqListener);
server.listen(4242);