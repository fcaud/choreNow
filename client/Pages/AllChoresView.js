import { NavBar, ChoreWrapper } from '../Components/index';
import { Text, View } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';

export default function AllChoresView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>AllChoresView</Text>
      <ChoreWrapper />
      <NavBar navigation={navigation} />
    </View>
  );
}
