const choresModel = require('../models/chores.model');

const createChore = async (req, res) => {
  try {
    await choresModel.setOneChore(req.body);
    res.status(201);
    res.send(req.body);
  } catch (e) {
    console.log('Create Chore Controller error', e);
  }
};

module.exports = { createChore };
