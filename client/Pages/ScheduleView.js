import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ScheduleViewStyles';

export default function ScheduleView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ScheduleView</Text>
      <NavBar navigation={navigation} />
    </View>
  );
}
