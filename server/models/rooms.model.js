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
const editOneRoom = async (id, data) => {
  try {
    return await RoomsModel.findByIdAndUpdate(id, data);
  } catch (e) {
    console.log('edit Rooms Model error', e);
  }
};
const deleteOneRoom = async (id) => {
  try {
    return await RoomsModel.findByIdAndDelete(id);
  } catch (e) {
    console.log('Delete Rooms Model error', e);
  }
};

module.exports = { setOneRoom, getAllRooms, editOneRoom, deleteOneRoom };
