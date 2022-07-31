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
const editRoom = async (req, res) => {
  try {
    await roomsModel.editOneRoom(req.body._id, req.body.dataToUpdate);
    res.status(204);
    res.end();
  } catch (e) {
    console.log('Get Rooms Controller error', e);
  }
};
const deleteRoom = async (req, res) => {
  try {
    await roomsModel.deleteOneRoom(req.body._id);
    res.status(204);
    res.end();
  } catch (e) {
    console.log('Get Rooms Controller error', e);
  }
};

module.exports = { createRoom, getRooms, editRoom, deleteRoom };
