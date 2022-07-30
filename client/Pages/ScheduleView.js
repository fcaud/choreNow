import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { ChoreWrapper } from '../Components';

export default function ScheduleView({ navigation }) {
  // const [settingsData, setSettingsData] = useState({});
  // const [choresData, setChoresData] = useState([]);
  const [weekAhead, setWeekAhead] = useState(populateWeekAhead());

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
    // setSettingsData(...settings);
    return settings[0];
  }
  //get prioritized list of chores
  async function getRankedChores() {
    let chores = await ApiClientService.getRankedChores();
    // setChoresData(chores);
    return chores;
  }
  useEffect(() => {
    const fetchData = async () => {
      const settings = await getSettings();
      await getRankedChores();
      addSettingsToWeekAhead(settings);
    };
    fetchData();
  }, []);
  //map through days and chores and if time space in a day render chores
  function addSettingsToWeekAhead(settings) {
    //add time settings to weekAhead
    setWeekAhead((oldVal) => {
      let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
      let res = { ...oldVal };
      Object.values(weekAhead).map((data, i) => {
        let lookUpDayIndex = new Date(data.date).getDay();
        data = { ...data, time: settings[days[lookUpDayIndex]] };
        res = { ...res, [i + 1]: data };
      });
      return res;
    });
  }
  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      {Object.values(weekAhead).map((day) => {
        return (
          <View key={day.date}>
            <Text key={day.date}>{moment(day.date).format('ddd Do MMM')}</Text>
            {day.chores.map((chore) => (
              <ChoreWrapper chore={chore} key={chore._id} />
            ))}
          </View>
        );
      })}
      <NavBar navigation={navigation} />
    </View>
  );
}
