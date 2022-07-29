import { NavBar, ChoreWrapper } from '../Components/index';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';

export default function AllChoresView({ navigation }) {
  const [choreData, setChoreData] = useState({});

  async function getChoreData() {
    const data = await ApiClientService.getRankedChores();
    const overdue = data.filter((chore) => chore.status === 'Overdue');
    const due = data.filter((chore) => chore.status === 'Due');
    const nearlyDue = data.filter((chore) => chore.status === 'Nearly due');
    const notDue = data.filter((chore) => chore.status === 'Not due');
    // console.log('overdue', overdue);
    setChoreData((oldObj) => ({
      ...oldObj,
      overdue: overdue,
      due: due,
      nearlyDue: nearlyDue,
      notDue: notDue,
    }));
  }
  console.log(choreData);

  useEffect(() => {
    getChoreData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Overdue</Text>
        {choreData.overdue.map((chore) => (
          <ChoreWrapper chore={chore} key={chore._id} />
        ))}
        <Text>Due</Text>
        {choreData.due.map((chore) => (
          <ChoreWrapper chore={chore} key={chore._id} />
        ))}
        <Text>Nearly due</Text>
        {choreData.nearlyDue.map((chore) => (
          <ChoreWrapper chore={chore} key={chore._id} />
        ))}
        <Text>Not due</Text>
        {choreData.notDue.map((chore) => (
          <ChoreWrapper chore={chore} key={chore._id} />
        ))}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
}
