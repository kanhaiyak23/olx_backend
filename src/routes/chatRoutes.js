const express = require('express');
const {
  getAllMessages,
  createMessage,
  updateMessage,
  deleteMessage,
} = require('../controllers/chatController');

const router = express.Router();

router.get('/messages', getAllMessages);
router.post('/messages', createMessage);
router.put('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessage);

module.exports = router;