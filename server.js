const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 5000, // Use dynamic port binding for Render
  path: '/myapp',
  corsOptions: {
    origin: '*', // Allow all origins. You can specify specific origins instead of '*'.
    methods: 'GET,POST,PUT,DELETE', // Specify allowed methods
  }
});

peerServer.on('connection', (client) => {
  const log = `Client connected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
});

peerServer.on('disconnect', (client) => {
  const log = `Client disconnected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
});

peerServer.on('error', (err) => {
  console.error(`PeerJS Server Error: ${err.message}`);
});

console.log('PeerJS signaling server running on port', process.env.PORT || 5000);