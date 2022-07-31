import NavBar from '../Components/NavBar';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { ChoreWrapper } from '../Components';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';

export default function ScheduleView({ navigation }) {
  const [weekAhead, setWeekAhead] = useState(populateWeekAhead());
  const [isLoading, setIsLoading] = useState(true);

  function populateWeekAhead() {
    const today = new Date().getTime();
    const weekAhead = {};
    for (let i = 0; i < 7; i++) {
      weekAhead[i + 1] = {};
      //calc dates for next 7 days
      weekAhead[i + 1].date = Number(today) + 86400000 * i;
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
      // addChoresToWeekAhead(chores);
    };
    fetchData();
  }, []);

  function addDataToWeekAhead(settings, chores) {
    console.log('____________________\n', '____________________\n', 'Calling');
    setWeekAhead((oldVal) => {
      console.log(
        '____________________\n',
        '____________________\n',
        'Calling 2',
        oldVal
      );
      let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      let res = { ...oldVal };
      //add time settings to weekAhead
      Object.values(oldVal).map((data, i) => {
        let lookUpDayIndex = new Date(data.date).getDay();
        const updatedData = { ...data, time: settings[days[lookUpDayIndex]] };
        res = { ...res, [i + 1]: updatedData };
      });
      //map through days and chores and if time space in a day add to chore array in weekAhead
      let allocatedChores = [];
      console.log('other', Object.values(res));
      Object.values(res).map((data, i) => {
        console.log('Day', i + 1, '*******************\n');
        // if (i === 0) {
        //   chores.map((chore) => {
        //     if (checkIfCompletedToday(chore)) {
        //       data.chores.push(chore);
        //       allocatedChores.push(chore._id);
        //       data.timeUsed = data.timeUsed + chore.timeToComplete;
        //     }
        //   });
        // }
        chores.map((chore, i) => {
          if (data.time === data.timeUsed) return;
          //pick out chore duration < time available
          const nextDue = new Date(chore.nextMin).getTime();
          console.log(
            'chore',
            i + 1,
            // 'allocated chores',
            // allocatedChores,
            // chore.timeToComplete <= data.time - data.timeUsed &&
            //   !allocatedChores.includes(chore._id) &&
            //   nextDue < data.date,
            '________________\n'
          );
          // if (
          //   chore.timeToComplete <= data.time - data.timeUsed &&
          //   !allocatedChores.includes(chore._id) &&
          //   nextDue < data.date
          // ) {
          //   //add chore to chore array
          //   data.chores.push(chore);
          //   //Prevent chore from being reselected
          //   allocatedChores.push(chore._id);
          //   //update time used
          //   data.timeUsed = data.timeUsed + chore.timeToComplete;
          // }
        });
      });
      setIsLoading(false);
      // console.log('Show result', res, '___________________________');
      return res;
    });
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
                <Text key={day.date}>
                  {moment(day.date).format('ddd Do MMM')}
                </Text>
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
