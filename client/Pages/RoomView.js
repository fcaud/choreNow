import { NavBar, RoomItem } from '../Components/index';
import { Text, View } from 'react-native';
import { styles } from './Styles/RoomViewStyles';
import ApiClientService from '../Services/ApiClientService';
import { useEffect, useState } from 'react';

export default function RoomView({ navigation }) {
  const [roomData, setRoomData] = useState([]);
  const [choreData, setChoreData] = useState([]);

  async function getRoomData() {
    const data = await ApiClientService.getAllRooms();
    setRoomData(data);
  }
  async function getChoreData() {
    const data = await ApiClientService.getAllChores();
    setChoreData(data);
  }

  useEffect(() => {
    getRoomData();
    getChoreData();
  }, []);
  return (
    <View style={styles.container}>
      <Text>RoomView</Text>
      <RoomItem />
      <NavBar navigation={navigation} />
    </View>
  );
}
