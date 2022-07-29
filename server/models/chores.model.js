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
const getRankedChores = async (choreData) => {
  try {
    const now = new Date();
    let chores = await ChoresModel.find({});
    //convert freqs to ms and add to last performed date
    chores = chores.map((chore) => {
      const conversionFactor = {
        weeks: 7 * 86400000,
        months: 30 * 86400000,
        days: 1 * 86400000,
      };
      //convert freq to ms
      const minFreqMs = chore.minFreq * conversionFactor[chore.freqUnit];
      const desiredFreqMs =
        chore.desiredFreq * conversionFactor[chore.freqUnit];
      const maxFreqMs = chore.maxFreq * conversionFactor[chore.freqUnit];
      //calc due date in ms for each freq
      const lastDate = new Date(chore.dateLastCompleted).getTime();
      const minDue = lastDate + minFreqMs;
      const desiredDue = lastDate + desiredFreqMs;
      const maxDue = lastDate + maxFreqMs;
      //calc status
      let status;
      if (now < minDue) status = 'Not due';
      else if (now < desiredDue) status = 'Nearly due';
      else if (now < maxDue) status = 'Due';
      else if (now >= maxDue) status = 'Overdue';
      //add properties to return object
      chore = {
        ...chore._doc,
        nextMin: new Date(minDue),
        nextDesired: new Date(desiredDue),
        nextMax: new Date(maxDue),
        status: status,
      };
      return chore;
    });

    //initially sort for longest time to undertake
    chores.sort((a, b) => b.timeToComplete - a.timeToComplete);
    //Logic for order of priority of tasks
    const order = [
      { p: 'High', s: 'Overdue' },
      { p: 'Medium', s: 'Overdue' },
      { p: 'High', s: 'Due' },
      { p: 'Medium', s: 'Due' },
      { p: 'Low', s: 'Overdue' },
      { p: 'Low', s: 'Due' },
      { p: 'High', s: 'Nearly due' },
      { p: 'Medium', s: 'Nearly due' },
      { p: 'Low', s: 'Nearly due' },
      { p: 'High', s: 'Not due' },
      { p: 'Medium', s: 'Not due' },
      { p: 'Low', s: 'Not due' },
    ];
    //loop through order and add each task to array
    let orderedChores = [];
    order.forEach((item) => {
      const filteredChores = chores.filter(
        (el) => el.status === item.s && el.priority === item.p
      );
      orderedChores = [...orderedChores, ...filteredChores];
    });

    return orderedChores;
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

module.exports = {
  setOneChore,
  getAllChores,
  editOneChore,
  deleteOneChore,
  getRankedChores,
};
