import { NavBar, RoomItem, EditRoomForm } from '../Components/index';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { styles } from './Styles/RoomViewStyles';
import ApiClientService from '../Services/ApiClientService';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RoomView({ navigation }) {
  const [roomData, setRoomData] = useState([]);
  const [choreData, setChoreData] = useState([]);
  const [roomModal, setRoomModal] = useState(false);

  function editRoomsModal() {
    setRoomModal(!roomModal);
  }

  async function getRoomData() {
    const data = await ApiClientService.getAllRooms();
    setRoomData(data);
  }
  async function getChoreData() {
    const data = await ApiClientService.getAllChores();
    setChoreData(data);
  }

  async function addRoom(room) {
    if (!room) return;
    const newRoom = await ApiClientService.createRoom({ room });
    setRoomData([...roomData, newRoom]);
  }
  async function deleteRoom(_id) {
    await ApiClientService.deleteRoom({ _id });
    getRoomData();
  }

  useEffect(() => {
    getRoomData();
    getChoreData();
  }, []);
  return (
    <View style={styles.container}>
      {roomData.map((room) => (
        <RoomItem choreData={choreData} room={room} key={room._id} />
      ))}
      <NavBar navigation={navigation} />
      <TouchableOpacity onPress={editRoomsModal}>
        <Text>Edit rooms</Text>
      </TouchableOpacity>

      <Modal visible={roomModal}>
        <View style={styles.modal}>
          <EditRoomForm
            roomData={roomData}
            addRoom={addRoom}
            deleteRoom={deleteRoom}
          />
          <TouchableOpacity onPress={editRoomsModal}>
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
