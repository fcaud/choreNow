import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';

export default function AllChoresView() {
  return (
    <View style={styles.container}>
      <Text>AllChoresView</Text>
      <NavBar />
    </View>
  );
}
