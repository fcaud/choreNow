import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/ChoreNowViewStyles';

export default function ChoreNowView() {
  return (
    <View style={styles.container}>
      <Text>ChoreNowView</Text>
      <NavBar />
    </View>
  );
}
