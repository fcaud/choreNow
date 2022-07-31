import NavBar from '../Components/NavBar';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { ChoreWrapper } from '../Components';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';
import { useIsFocused } from '@react-navigation/native';

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
      //check for tasks completed today and render them today
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
        //pick out chore duration < time available
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

export default function ScheduleView({ navigation }) {
  const [weekAhead, setWeekAhead] = useState(populateWeekAhead());
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

  function populateWeekAhead() {
    const today = new Date().getTime();
    const weekAhead = {};
    for (let i = 0; i < 7; i++) {
      weekAhead[i + 1] = {};
      //calc dates for next 7 days
      weekAhead[i + 1].date = Number(today) + Number(86400000 * i);
      weekAhead[i + 1].chores = [];
      weekAhead[i + 1].time = 0;
      weekAhead[i + 1].timeUsed = 0;
    }
    return weekAhead;
  }
  //get user time settings for each day
  async function getSettings() {
    let settings = await ApiClientService.getSettings();
    return settings[0];
  }
  //get prioritized list of chores
  async function getRankedChores() {
    let chores = await ApiClientService.getRankedChores();
    return chores;
  }
  useEffect(() => {
    const fetchData = async () => {
      const settings = await getSettings();
      const chores = await getRankedChores();
      addDataToWeekAhead(settings, chores);
    };
    if (isFocused) fetchData();
    else setIsLoading(true);
  }, [isFocused]);

  function addDataToWeekAhead(settings, chores) {
    setWeekAhead(() => {
      const weekAheadWithTime = getWeekAheadWithTime(
        populateWeekAhead(),
        settings
      );
      return allocateChores(weekAheadWithTime, chores);
    });
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {Object.values(weekAhead).map((day) => {
            return (
              <View key={day.date}>
                <Text>{moment(day.date).format('ddd Do MMM')}</Text>
                {day.chores.map((chore, i) => (
                  <ChoreWrapper chore={chore} key={i} />
                ))}
              </View>
            );
          })}
        </ScrollView>
      )}
      <NavBar navigation={navigation} />
    </View>
  );
}
