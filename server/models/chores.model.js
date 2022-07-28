const { ChoresModel } = require('./db.index');

const setOneChore = async (choreData) => {
  try {
    return await ChoresModel.create(choreData);
  } catch (e) {
    console.log('Create Chore Model error', e);
  }
};

const getAllChores = async (choreData) => {
  try {
    return await ChoresModel.find({});
  } catch (e) {
    console.log('Get Chores Model error', e);
  }
};
const editOneChore = async (id, data) => {
  try {
    return await ChoresModel.findByIdAndUpdate(id, data);
  } catch (e) {
    console.log('edit Chores Model error', e);
  }
};
const deleteOneChore = async (id) => {
  try {
    return await ChoresModel.findByIdAndDelete(id);
  } catch (e) {
    console.log('delete Chores Model error', e);
  }
};

module.exports = { setOneChore, getAllChores, editOneChore, deleteOneChore };
