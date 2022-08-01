import { NavBar, ChoreWrapper } from '../Components/index';
import { ChoreNowInputForm } from '../Features/index';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './Styles/ChoreNowViewStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';
import { useIsFocused } from '@react-navigation/native';
import React from 'react';

export default function ChoreNowView({ navigation }) {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [choreData, setChoreData] = useState({});
  const [timeOutput, setTimeOutput] = useState({});
  const [choresToRender, setChoresToRender] = useState([]);

  async function getChoreData() {
    console.log('hi');
    const chores = await ApiClientService.getRankedChores();
    setChoreData(chores);
    setIsLoading(false);
  }
  useEffect(() => {
    if (isFocused) getChoreData();
    else setIsLoading(true);
  }, [isFocused]);

  function selectChores() {
    //map through chores and if have time add to render
    let timeRemaining = timeOutput[1];
    const chores = [];
    choreData.map((chore) => {
      if (chore.timeToComplete <= timeRemaining) {
        chores.push(chore);
        timeRemaining -= chore.timeToComplete;
      }
    });
    setChoresToRender(chores);
  }

  async function choreCompleted(_id, date) {
    await checkOffChore(_id, date);
    await getChoreData();
    selectChores();
  }
  async function choreRemoveCompleted(_id, date) {
    await uncheckChore(_id, date);
    await getChoreData();
    selectChores();
  }

  return (
    <View style={styles.container}>
      <Text>ChoreNowView</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <ChoreNowInputForm
            selectChores={selectChores}
            setTimeOutput={setTimeOutput}
          />
        </View>
      )}
      <ScrollView>
        {choresToRender.map((chore) => (
          <ChoreWrapper
            chore={chore}
            key={chore._id}
            choreCompleted={choreCompleted}
            choreRemoveCompleted={choreRemoveCompleted}
          />
        ))}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}
