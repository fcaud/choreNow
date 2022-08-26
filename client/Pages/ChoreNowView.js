import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { NavBar, ChoreWrapper } from '../Components/index';
import { ChoreNowInputForm } from '../Features/index';
import { styles } from './Styles/ChoreNowViewStyles';
import { globalElements } from '../Utils/GlobalStylingElements';
import ApiClientService from '../Services/ApiClientService';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';
import { useIsFocused } from '@react-navigation/native';

export default function ChoreNowView({ navigation }) {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [choreData, setChoreData] = useState({});
  const [timeOutput, setTimeOutput] = useState({});
  const [choresToRender, setChoresToRender] = useState([]);
  const [completedChores, setCompletedChores] = useState([]);

  async function getChoreData() {
    const chores = await ApiClientService.getRankedChores();
    setChoreData(chores);
    setIsLoading(false);
    return chores;
  }
  useEffect(() => {
    if (isFocused) getChoreData();
    else setIsLoading(true);
  }, [isFocused]);

  function selectChores(_, choresArg, completedArray) {
    //click event was passing as argument so included dummy argument
    let timeRemaining = timeOutput[1];
    let chores = choreData;
    if (choresArg) chores = choresArg;
    let defaultArr = [];

    //Check if any previously rendered chores have been completed - in order to persist them in choreNow view
    if (completedArray && completedArray.length) {
      console.log(completedArray);
      defaultArr = chores.filter((chore) => {
        if (completedArray.includes(chore._id)) {
          timeRemaining -= chore.timeToComplete;
          return true;
        } else {
          return false;
        }
      });
      //remove checked off chores before the reduce to avoid duplicates
      chores = chores.filter((chore) => !completedArray.includes(chore._id));
    }

    //loop through chores and if have time add to render
    const choresToBeRendered = chores.reduce((acc, chore) => {
      if (chore.timeToComplete <= timeRemaining) {
        acc = [...acc, chore];
        timeRemaining -= chore.timeToComplete;
      }
      return acc;
    }, defaultArr);
    setChoresToRender(choresToBeRendered);
  }

  async function choreCompleted(_id, date) {
    const choresCompleted = [...completedChores, _id];
    setCompletedChores(choresCompleted);
    await checkOffChore(_id, date);
    const chores = await getChoreData();
    selectChores('_', chores, choresCompleted);
  }
  async function choreRemoveCompleted(_id, date) {
    const choresCompleted = completedChores.filter((id) => id !== _id);
    setCompletedChores(choresCompleted);
    await uncheckChore(_id, date);
    const chores = await getChoreData();
    selectChores('_', chores, choresCompleted);
  }

  return (
    <View style={styles.container}>
      <Text style={globalElements.h1}>ChoreNow</Text>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={globalElements.borderedView}>
          <ChoreNowInputForm
            selectChores={selectChores}
            setTimeOutput={setTimeOutput}
          />
        </View>
      )}
      <ScrollView style={globalElements.scrollView}>
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
