const prisma = require('../config/database');

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await prisma.chatMessage.findMany({ // Updated reference
      orderBy: { createdAt: 'asc' },
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error('Error retrieving messages:', error); // Log error details
    res.status(500).json({ message: 'Error retrieving all messages', error: error.message });
  }
};


exports.createMessage = async (req, res) => {
  const { senderId, sellerId, chatId, text, image } = req.body;
  try {
    const newMessage = await prisma.chatMessage.create({
      data: {
        senderId,
        sellerId,
        chatId,
        text,
        image,
      },
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating message', error });
  }
};

exports.updateMessage = async (req, res) => {
  const { id } = req.params;
  const { senderId, sellerId, chatId, text, image } = req.body;
  try {
    const updatedMessage = await prisma.chatMessage.update({
      where: { id },
      data: {
        senderId,
        sellerId,
        chatId,
        text,
        image,
      },
    });
    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Error updating message', error });
  }
};

exports.deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.chatMessage.delete({
      where: { id },
    });
    res.status(204).json({ message: "Deleted message "})
  } catch (error) {
    res.status(500).json({ message: 'Error deleting message', error });
  }
};