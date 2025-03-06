const express = require('express');
const { PeerServer } = require('peer');

const app = express();
const logs = [];

// Create the PeerJS server
const peerServer = PeerServer({
  port: process.env.PEER_PORT || 5000, // Use dynamic port binding for Render
  path: '/myapp'
});

peerServer.on('connection', (client) => {
  const log = `Client connected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
  logs.push(log);
});

peerServer.on('disconnect', (client) => {
  const log = `Client disconnected: ${client.getId()} at ${new Date().toISOString()}`;
  console.log(log);
  logs.push(log);
});

// Route to display logs
app.get('/log', (req, res) => {
  res.json(logs);
});

// Start the Express server
const PORT = process.env.EXPRESS_PORT || 9000;
app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});

console.log('PeerJS signaling server running on port', process.env.PEER_PORT || 5000);