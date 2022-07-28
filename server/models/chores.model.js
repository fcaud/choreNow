const { ChoresModel } = require('./db.index');

const setOneChore = async (choreData) => {
  try {
    return await ChoresModel.create(choreData);
  } catch (e) {
    console.log('Create Chore Model error', e);
  }
};

module.exports = { setOneChore };
