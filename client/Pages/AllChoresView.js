import { NavBar, ChoreWrapper } from '../Components/index';
import { Text, View } from 'react-native';
import { styles } from './Styles/AllChoresViewStyles';
import { useState, useEffect } from 'react';
import ApiClientService from '../Services/ApiClientService';

export default function AllChoresView({ navigation }) {
  const [choreData, setChoreData] = useState([]);

  async function getChoreData() {
    const data = await ApiClientService.getAllChores();
    setChoreData(data);
  }

  useEffect(() => {
    getChoreData();
  }, []);

  return (
    <View style={styles.container}>
      {choreData.map((chore) => (
        <ChoreWrapper chore={chore} key={chore._id} />
      ))}
      <NavBar navigation={navigation} />
    </View>
  );
}
