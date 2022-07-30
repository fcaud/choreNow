function minsToHoursAndMins(totalMins) {
  let mins = (totalMins % 60).toString();
  let hours = ((totalMins - mins) / 60).toString();
  if (mins.length === 1) mins = `0${mins}`;
  if (mins.length === 0) mins = '00';
  if (hours.length === 1) hours = `0${hours}`;
  if (hours.length === 0) hours = '00';
  return { mins, hours };
}

function checkIfCompletedToday(chore) {
  let today = new Date();
  let choreDate = new Date(chore.dateLastCompleted);
  today = `${today.getDate()}${today.getMonth()}${today.getFullYear()}`;
  choreDate = `${choreDate.getDate()}${choreDate.getMonth()}${choreDate.getFullYear()}`;
  return today === choreDate;
}

export { minsToHoursAndMins, checkIfCompletedToday };
