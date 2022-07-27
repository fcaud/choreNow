import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';

export default function ScheduleView() {
  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      <NavBar />
    </View>
  );
}
