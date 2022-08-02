import { NavBar } from '../Components/index';
import { UserTimePreferenceForm } from '../Features';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import { styles } from './Styles/UserSettingsStyles';
import React, { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { useIsFocused } from '@react-navigation/native';

export default function UserSettings({ navigation }) {
  const isFocused = useIsFocused();
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [timeOutput, setTimeOutput] = useState({});
  const [settingsData, setSettingsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function saveSettings(timeData) {
    timeData = { ...timeData, _id: settingsData._id };
    await ApiClientService.updateSettings(timeData);
  }

  async function getSettings() {
    let settings = await ApiClientService.getSettings();
    setSettingsData(...settings);
    setIsLoading(false);
  }
  useEffect(() => {
    if (isFocused) getSettings();
    else setIsLoading(true);
  }, [isFocused]);
  //consider how to close the keyboard
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <Text>UserSettings </Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <UserTimePreferenceForm
            setDisableSubmit={setDisableSubmit}
            setTimeOutput={setTimeOutput}
            settingsData={settingsData}
          />
        )}
        <TouchableOpacity
          onPress={() => saveSettings(timeOutput)}
          disabled={disableSubmit}
        >
          <Text>Save settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Splash')}>
          <Text>Log out</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <NavBar navigation={navigation} />
    </View>
  );
}
