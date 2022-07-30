import { NavBar } from '../Components/index';
import { UserTimePreferenceForm } from '../Features';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './Styles/UserSettingsStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';

export default function UserSettings({ navigation }) {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [timeOutput, setTimeOutput] = useState({});
  const [settingsData, setSettingsData] = useState({});

  async function saveSettings(timeData) {
    // console.log(timeData);
    timeData = { ...timeData, _id: settingsData._id };
    console.log(timeData);
    await ApiClientService.updateSettings(timeData);
  }

  async function getSettings() {
    let settings = await ApiClientService.getSettings();
    // console.log(...settings);
    setSettingsData(...settings);
  }
  useEffect(() => {
    getSettings();
  }, []);

  return (
    <View style={styles.container}>
      <Text>UserSettings {settingsData.mon}</Text>
      <UserTimePreferenceForm
        setDisableSubmit={setDisableSubmit}
        setTimeOutput={setTimeOutput}
      />
      <TouchableOpacity
        onPress={() => saveSettings(timeOutput)}
        disabled={disableSubmit}
      >
        <Text>Save settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
        <Text>Log out</Text>
      </TouchableOpacity>
      <NavBar navigation={navigation} />
    </View>
  );
}
