const settingsModel = require('../models/settings.model');

const setInitialSettings = async (req, res) => {
  try {
    const settings = await settingsModel.setSettings(req.body);
    res.status(201);
    res.send(settings);
  } catch (e) {
    console.log('Set Settings Controller error', e);
  }
};

const getSettings = async (req, res) => {
  try {
    const settings = await settingsModel.getAllSettings();
    res.status(200);
    res.send(settings);
  } catch (e) {
    console.log('Get Settings Controller error', e);
  }
};
const updateSettings = async (req, res) => {
  try {
    await settingsModel.updateUserSettings(req.body._id, req.body);
    res.status(204);
    res.end();
  } catch (e) {
    console.log('Update Settings Controller error', e);
  }
};

module.exports = {
  setInitialSettings,
  getSettings,
  updateSettings,
};
