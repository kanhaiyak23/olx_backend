const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');
const initializeSocket = require('./services/socketService');

dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Initialize Socket.IO
const io = initializeSocket(server);

// Use chat routes
app.use('/api', chatRoutes);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API is running');
  });
  
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});