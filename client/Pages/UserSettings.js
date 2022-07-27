import NavBar from '../Components/NavBar';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles/UserSettingsStyles';

export default function UserSettings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>UserSettings</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text>Log out</Text>
      </TouchableOpacity>
      <NavBar navigation={navigation} />
    </View>
  );
}
