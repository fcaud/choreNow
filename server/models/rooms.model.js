const { RoomsModel } = require('./db.index');

const setOneRoom = async (roomData) => {
  try {
    return await RoomsModel.create(roomData);
  } catch (e) {
    console.log('Create Room Model error', e);
  }
};

module.exports = { setOneRoom };
