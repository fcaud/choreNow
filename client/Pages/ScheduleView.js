import NavBar from '../Components/NavBar';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';
import React, { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { ChoreWrapper } from '../Components';
import { useIsFocused } from '@react-navigation/native';
import {
  getWeekAheadWithTime,
  allocateChores,
} from '../Utils/ScheduleViewAlgorithm';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';
import { globalElements } from '../Utils/GlobalStylingElements';

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
  //updating data into required format - using algorthim helper function
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
  const fetchData = async () => {
    const settings = await getSettings();
    const chores = await getRankedChores();
    addDataToWeekAhead(settings, chores);
  };
  useEffect(() => {
    if (isFocused) fetchData();
    else setIsLoading(true);
  }, [isFocused]);

  async function choreCompleted(_id, date) {
    await checkOffChore(_id, date);
    await fetchData();
  }
  async function choreRemoveCompleted(_id, date) {
    await uncheckChore(_id, date);
    await fetchData();
  }

  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  return (
    <View style={styles.container}>
      {fontsLoaded ? (
        <>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <>
              <Text style={[globalElements.h1, { width: '90%' }]}>
                Your Chore Schedule:
              </Text>
              <ScrollView style={styles.scrollView}>
                {Object.values(weekAhead).map((day) => {
                  return (
                    <View key={day.date}>
                      <Text style={globalElements.h2}>
                        {moment(day.date).format('ddd Do MMM')}
                      </Text>
                      {day.chores.length === 0 ? (
                        <Text style={globalElements.pGreyed}>
                          No chores on {moment(day.date).format('dddd')}
                        </Text>
                      ) : (
                        day.chores.map((chore, i) => (
                          <ChoreWrapper
                            chore={chore}
                            key={i}
                            choreCompleted={choreCompleted}
                            choreRemoveCompleted={choreRemoveCompleted}
                          />
                        ))
                      )}
                    </View>
                  );
                })}
              </ScrollView>
            </>
          )}
          <NavBar navigation={navigation} />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}
