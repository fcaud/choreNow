const { SettingsModel } = require('./db.index');

const setSettings = async (settingsData) => {
  try {
    return await SettingsModel.create(settingsData);
  } catch (e) {
    console.log('Set Settings Model error', e);
  }
};
const getAllSettings = async () => {
  try {
    return await SettingsModel.find({});
  } catch (e) {
    console.log('Get Settings Model error', e);
  }
};
const updateUserSettings = async (id, data) => {
  try {
    return await SettingsModel.findByIdAndUpdate(id, data);
  } catch (e) {
    console.log('Update Settings Model error', e);
  }
};

module.exports = { setSettings, getAllSettings, updateUserSettings };
