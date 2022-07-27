import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/RoomViewStyles';

export default function RoomView() {
  return (
    <View style={styles.container}>
      <Text>RoomView</Text>
      <NavBar />
    </View>
  );
}
