const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');
const initializeSocket = require('./services/socketService');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Initialize Socket.IO

// Use chat routes
app.use('/api', chatRoutes);

const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
    res.send('API is running');
  });
  
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

initializeSocket(server);
