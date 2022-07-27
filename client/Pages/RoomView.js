import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/RoomViewStyles';

export default function RoomView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>RoomView</Text>
      <NavBar navigation={navigation} />
    </View>
  );
}
