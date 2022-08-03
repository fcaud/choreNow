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
  const [saved, setSaved] = useState(false);

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
    else {
      setIsLoading(true);
      setSaved(false);
    }
  }, [isFocused]);
  //consider how to close the keyboard
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Text style={globalElements.h1}>UserSettings </Text>
            <ScrollView style={globalElements.scrollView}>
              <UserTimePreferenceForm
                setDisableSubmit={setDisableSubmit}
                setTimeOutput={setTimeOutput}
                settingsData={settingsData}
              />
              <TouchableOpacity
                onPress={() => {
                  saveSettings(timeOutput);
                  setSaved(true);
                }}
                disabled={disableSubmit}
                style={[globalElements.buttonOrange]}
              >
                <Text style={[globalElements.pWhite]}>Save</Text>
              </TouchableOpacity>
              {saved && (
                <Text style={[globalElements.pGreyed, { textAlign: 'center' }]}>
                  Settings saved
                </Text>
              )}
              <TouchableOpacity
                onPress={() => navigation.navigate('Splash')}
                style={[globalElements.buttonOrange]}
              >
                <Text style={[globalElements.pWhite]}>Log out</Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </KeyboardAvoidingView>
      <NavBar navigation={navigation} />
    </View>
  );
}
