import { checkIfCompletedToday } from '../Utils/HelperFunctions';
const getWeekAheadWithTime = (previousValue, settings) => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

  return Object.values(previousValue).reduce((acc, nextValue, i) => {
    const lookUpDayIndex = new Date(nextValue.date).getDay();
    const dayOfWeek = days[lookUpDayIndex];

    acc[i + 1] = {
      ...nextValue,
      time: settings[dayOfWeek],
    };
    return acc;
  }, previousValue);
};

const allocateChores = (weekAheadWithTime, chores) => {
  const weekDays = Object.values(weekAheadWithTime);

  const result = weekDays.reduce(
    (acc, currDay, i) => {
      const indexInObject = i + 1;
      if (i === 0) {
        chores.map((chore) => {
          const currentDay = acc.weekAheadWithTime[indexInObject];
          if (
            checkIfCompletedToday(chore) &&
            !acc.choreCache.includes(chore._id)
          ) {
            acc.weekAheadWithTime[indexInObject] = {
              ...currentDay,
              chores: [...currentDay.chores, chore],
              timeUsed: currentDay.timeUsed + chore.timeToComplete,
            };
            acc.choreCache = [...acc.choreCache, chore._id];
          }
        });
      }

      chores.map((chore, i) => {
        const currentDay = acc.weekAheadWithTime[indexInObject];
        if (currentDay.time === currentDay.timeUsed) return;
        const nextDue = new Date(chore.nextMin).getTime();
        if (
          chore.timeToComplete <= currentDay.time - currentDay.timeUsed &&
          !acc.choreCache.includes(chore._id) &&
          nextDue < currentDay.date
        ) {
          acc.weekAheadWithTime[indexInObject] = {
            ...currentDay,
            chores: [...currentDay.chores, chore],
            timeUsed: currentDay.timeUsed + chore.timeToComplete,
          };
          acc.choreCache = [...acc.choreCache, chore._id];
        }
      });

      return acc;
    },
    { weekAheadWithTime, choreCache: [] }
  );

  return result.weekAheadWithTime;
};

export { getWeekAheadWithTime, allocateChores };
