import { NavBar } from '../Components/index';
import { UserTimePreferenceForm } from '../Features';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { styles } from './Styles/UserSettingsStyles';
import React, { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { useIsFocused } from '@react-navigation/native';
import { globalElements } from '../Utils/GlobalStylingElements';

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
        <Text style={globalElements.h1}>UserSettings </Text>
        <ScrollView style={globalElements.scrollView}>
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
            style={[globalElements.buttonOrange]}
          >
            <Text style={[globalElements.pWhite]}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Splash')}
            style={[globalElements.buttonOrange]}
          >
            <Text style={[globalElements.pWhite]}>Log out</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <NavBar navigation={navigation} />
    </View>
  );
}
