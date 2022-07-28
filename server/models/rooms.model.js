const { RoomsModel } = require('./db.index');

const setOneRoom = async (roomData) => {
  try {
    return await RoomsModel.create(roomData);
  } catch (e) {
    console.log('Create Room Model error', e);
  }
};

const getAllRooms = async (roomData) => {
  try {
    return await RoomsModel.find({});
  } catch (e) {
    console.log('Get Rooms Model error', e);
  }
};

module.exports = { setOneRoom, getAllRooms };
