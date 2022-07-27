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

const Schema = new mongoose.Schema({
  taskName: { type: String, required: true },
  room: { type: String, required: true },
  priority: { type: String, required: true },
  timeToComplete: { type: String, required: true },
  dateLastCompleted: { type: Date, required: true },
  notes: { type: String, required: true },
  freqUnit: { type: String, required: true },
  minFreq: { type: Number, required: true },
  maxFreq: { type: Number, required: true },
  desiredFreq: { type: Number, required: true },
});

const ChoresModel = mongoose.model('Chores', Schema);

module.exports = { dbInit, ChoresModel };
