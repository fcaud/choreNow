function minsToHoursAndMins(mins) {
  const minsDur = mins % 60;
  const hoursDur = (mins - minsDur) / 60;
  return { minsDur, hoursDur };
}
