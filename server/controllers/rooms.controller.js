const roomsModel = require('../models/rooms.model');

const createRoom = async (req, res) => {
  try {
    await roomsModel.setOneRoom(req.body);
    res.status(201);
    res.send(req.body);
  } catch (e) {
    console.log('Create Room Controller error', e);
  }
};

module.exports = { createRoom };
