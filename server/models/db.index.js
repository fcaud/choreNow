const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ChoreNow';

const dbInit = async () => {
  try {
    await mongoose.connect(url);
    console.log('Mongoose db connected on 27017');
  } catch (e) {
    console.log('DB error', e);
  }
};

const ChoreSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  room: { type: String, required: true },
  priority: { type: String, required: true },
  timeToComplete: { type: Number, required: true },
  dateLastCompleted: { type: Date, required: true },
  prevDateLastCompleted: { type: Date, default: 0 },
  notes: { type: String, required: false },
  freqUnit: { type: String, required: true },
  minFreq: { type: Number, required: true },
  maxFreq: { type: Number, required: true },
  desiredFreq: { type: Number, required: true },
});
const RoomSchema = new mongoose.Schema({
  room: { type: String, required: true },
});
const SettingsSchema = new mongoose.Schema({
  mon: { type: Number, required: true },
  tue: { type: Number, required: true },
  wed: { type: Number, required: true },
  thu: { type: Number, required: true },
  fri: { type: Number, required: true },
  sat: { type: Number, required: true },
  sun: { type: Number, required: true },
});

const ChoresModel = mongoose.model('Chores', ChoreSchema);
const RoomsModel = mongoose.model('Rooms', RoomSchema);
const SettingsModel = mongoose.model('Settings', SettingsSchema);

module.exports = { dbInit, ChoresModel, RoomsModel, SettingsModel };
