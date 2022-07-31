const choresModel = require('../models/chores.model');

const createChore = async (req, res) => {
  try {
    const chore = await choresModel.setOneChore(req.body);
    res.status(201);
    res.send(chore);
  } catch (e) {
    console.log('Create Chore Controller error', e);
  }
};

const getChores = async (req, res) => {
  try {
    const chores = await choresModel.getAllChores();
    res.status(200);
    res.send(chores);
  } catch (e) {
    console.log('Get Chores Controller error', e);
  }
};
const editChore = async (req, res) => {
  try {
    await choresModel.editOneChore(req.body._id, req.body.dataToUpdate);
    res.status(204);
    res.end();
  } catch (e) {
    console.log('Get Chores Controller error', e);
  }
};
const deleteChore = async (req, res) => {
  try {
    await choresModel.deleteOneChore(req.body._id);
    res.status(204);
    res.end();
  } catch (e) {
    console.log('Get Chores Controller error', e);
  }
};

const getChoresInOrder = async (req, res) => {
  try {
    const chores = await choresModel.getRankedChores();
    res.status(200);
    res.send(chores);
  } catch (e) {
    console.log('Get Chores Controller error', e);
  }
};

module.exports = {
  createChore,
  getChores,
  editChore,
  deleteChore,
  getChoresInOrder,
};
