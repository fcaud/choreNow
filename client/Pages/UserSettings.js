import NavBar from '../Components/NavBar';
import { Text, View } from 'react-native';
import { styles } from './Styles/UserSettingsStyles';

export default function UserSettings() {
  return (
    <View style={styles.container}>
      <Text>UserSettings</Text>
      <NavBar />
    </View>
  );
}
