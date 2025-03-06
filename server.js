const { PeerServer } = require('peer');

const DEFAULT_PORT = 5000
const peerServer = PeerServer({
  port: process.env.PORT || DEFAULT_PORT, // Use dynamic port binding for Render
  path: '/myapp'
});

peerServer.on('connection', (client) => {
  const log = `Client connected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
  
});

peerServer.on('disconnect', (client) => {
  const log = `Client disconnected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
});


console.log('PeerJS signaling server running on port', process.env.PORT || DEFAULT_PORT);