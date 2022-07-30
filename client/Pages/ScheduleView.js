import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';
import moment from 'moment';

export default function ScheduleView({ navigation }) {
  const today = new Date().getTime();
  const weekAhead = {};
  for (let i = 0; i < 7; i++) {
    weekAhead[i + 1] = Number(today) + 86400000 * i;
  }
  //get user time settings for each day
  //get prioritized list of chores
  //map through prioritized chores and if time space in a day render it
  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      {Object.values(weekAhead).map((date) => {
        return <Text>{moment(date).format('ddd Do MMM')}</Text>;
      })}
      <NavBar navigation={navigation} />
    </View>
  );
}
