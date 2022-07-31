import { NavBar, ChoreWrapper } from '../Components/index';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';
import { useIsFocused } from '@react-navigation/native';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';

export default function AllChoresView({ navigation }) {
  const isFocused = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [choreData, setChoreData] = useState({
    overdue: [],
    due: [],
    nearlyDue: [],
    notDue: [],
  });
  const statusCodes = ['Overdue', 'Due', 'Nearly due', 'Not due'];

  async function getChoreData() {
    const data = await ApiClientService.getRankedChores();
    const overdue = data.filter((chore) => chore.status === 'Overdue');
    const due = data.filter((chore) => chore.status === 'Due');
    const nearlyDue = data.filter((chore) => chore.status === 'Nearly due');
    const notDue = data.filter((chore) => chore.status === 'Not due');
    setChoreData((oldObj) => ({
      ...oldObj,
      overdue: overdue,
      due: due,
      nearlyDue: nearlyDue,
      notDue: notDue,
    }));
    setIsLoading(false);
  }
  useEffect(() => {
    if (isFocused) getChoreData();
    else setIsLoading(true);
  }, [isFocused]);

  async function choreCompleted(_id, date) {
    await checkOffChore(_id, date);
    getChoreData();
  }
  async function choreRemoveCompleted(_id, date) {
    await uncheckChore(_id, date);
    getChoreData();
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          <Text>Overdue</Text>
          {choreData.overdue.length !== 0 ? (
            choreData.overdue.map((chore) => (
              <ChoreWrapper
                chore={chore}
                key={chore._id}
                choreCompleted={choreCompleted}
                choreRemoveCompleted={choreRemoveCompleted}
              />
            ))
          ) : (
            <Text>No tasks</Text>
          )}
          <Text>Due</Text>
          {choreData.due.length !== 0 ? (
            choreData.due.map((chore) => (
              <ChoreWrapper
                chore={chore}
                key={chore._id}
                choreCompleted={choreCompleted}
                choreRemoveCompleted={choreRemoveCompleted}
              />
            ))
          ) : (
            <Text>No tasks</Text>
          )}

          <Text>Nearly due</Text>
          {choreData.nearlyDue.length !== 0 ? (
            choreData.nearlyDue.map((chore) => (
              <ChoreWrapper
                chore={chore}
                key={chore._id}
                choreCompleted={choreCompleted}
                choreRemoveCompleted={choreRemoveCompleted}
              />
            ))
          ) : (
            <Text>No tasks</Text>
          )}

          <Text>Not due</Text>
          {choreData.notDue.length !== 0 ? (
            choreData.notDue.map((chore) => (
              <ChoreWrapper
                chore={chore}
                key={chore._id}
                choreCompleted={choreCompleted}
                choreRemoveCompleted={choreRemoveCompleted}
              />
            ))
          ) : (
            <Text>No tasks</Text>
          )}
        </ScrollView>
      )}
      <NavBar navigation={navigation} />
    </View>
  );
}
