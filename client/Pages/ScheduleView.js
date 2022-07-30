import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';

export default function ScheduleView({ navigation }) {
  const [settingsData, setSettingsData] = useState({});
  const [choresData, setChoresData] = useState([]);
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
    setSettingsData(...settings);
  }
  //get prioritized list of chores
  async function getRankedChores() {
    let chores = await ApiClientService.getRankedChores();
    setChoresData(chores);
  }
  useEffect(() => {
    getSettings();
    getRankedChores();
  }, []);
  //map through prioritized chores and if time space in a day render it
  function choresToRender() {}
  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      {Object.values(weekAhead).map((day) => {
        return (
          <Text key={day.date}>{moment(day.date).format('ddd Do MMM')}</Text>
        );
      })}
      <NavBar navigation={navigation} />
    </View>
  );
}
