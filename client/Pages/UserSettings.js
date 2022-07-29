import { NavBar } from '../Components/index';
import { UserTimePreferenceForm } from '../Features';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles/UserSettingsStyles';
import { useState } from 'react';

export default function UserSettings({ navigation }) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [timeOutput, setTimeOutput] = useState({});
  function saveSettings() {
    console.log('save');
  }
  return (
    <View style={styles.container}>
      <Text>UserSettings</Text>
      <UserTimePreferenceForm
        setDisableSubmit={setDisableSubmit}
        setTimeOutput={setTimeOutput}
      />
      <TouchableOpacity onPress={() => saveSettings()} disabled={disableSubmit}>
        <Text>Save settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text>Log out</Text>
      </TouchableOpacity>
      <NavBar navigation={navigation} />
    </View>
  );
}
