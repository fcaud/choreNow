const roomsModel = require('../models/rooms.model');

const createRoom = async (req, res) => {
  try {
    const room = await roomsModel.setOneRoom(req.body);
    res.status(201);
    res.send(room);
  } catch (e) {
    console.log('Create Room Controller error', e);
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await roomsModel.getAllRooms();
    res.status(200);
    res.send(rooms);
  } catch (e) {
    console.log('Get Rooms Controller error', e);
  }
};

module.exports = { createRoom, getRooms };
