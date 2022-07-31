import { NavBar, ChoreWrapper } from '../Components/index';
import { ChoreNowInputForm } from '../Features/index';
import { Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { styles } from './Styles/ChoreNowViewStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { useIsFocused } from '@react-navigation/native';

export default function ChoreNowView({ navigation }) {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [choreData, setChoreData] = useState({});
  const [timeOutput, setTimeOutput] = useState({});
  const [choresToRender, setChoresToRender] = useState([]);

  async function getChoreData() {
    const chores = await ApiClientService.getRankedChores();
    setChoreData(chores);
    setIsLoading(false);
  }
  function selectChores() {
    //map through chores and if have time add to render
    let timeRemaining = timeOutput[1];
    const res = [];
    choreData.map((chore) => {
      if (chore.timeToComplete <= timeRemaining) {
        res.push(chore);
        timeRemaining -= chore.timeToComplete;
      }
    });
    setChoresToRender(res);
  }
  useEffect(() => {
    if (isFocused) getChoreData();
    else setIsLoading(true);
  }, [isFocused]);

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
          <ChoreWrapper chore={chore} key={chore._id} />
        ))}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}
