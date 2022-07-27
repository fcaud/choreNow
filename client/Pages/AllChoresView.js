import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';

export default function AllChoresView({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>AllChoresView</Text>
      <NavBar navigation={navigation} />
    </View>
  );
}
