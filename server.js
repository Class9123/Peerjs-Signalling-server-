var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;


// Server options
var options = {
    debug: true
};
var server = require('http').createServer(app);

app.use('/peerjs', ExpressPeerServer(server, options));
const PORT = process.env.PORT || 5000
server.listen(PORT, "localhost", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});