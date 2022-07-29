import {
  NavBar,
  RoomItem,
  EditRoomForm,
  AddChoreForm,
} from '../Components/index';
import { Text, TouchableOpacity, View, Modal } from 'react-native';
import { styles } from './Styles/RoomViewStyles';
import ApiClientService from '../Services/ApiClientService';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RoomView({ navigation }) {
  const [roomData, setRoomData] = useState([]);
  const [curRoom, setCurRoom] = useState({});
  const [choreData, setChoreData] = useState([]);
  const [curChore, setCurChore] = useState({});
  const [roomModal, setRoomModal] = useState(false);
  const [addChoreModal, setAddChoreModal] = useState(false);
  const [editChoreModal, setEditChoreModal] = useState(false);

  function editRoomsModal() {
    setRoomModal(!roomModal);
  }
  function addChoresModal(room) {
    setAddChoreModal(!addChoreModal);
    setCurRoom(room);
  }
  function editChoresModal() {
    setEditChoreModal(!editChoreModal);
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
  async function addChore(chore) {
    console.log(chore);
    if (!chore) return;
    const newChore = await ApiClientService.createChore(chore);
    setChoreData([...choreData, newChore]);
  }
  async function deleteRoom(room) {
    await ApiClientService.deleteRoom({ _id: room._id });
    // const choresForRoom = choreData.filter((chore) => chore.room === room.room);
    // await choresForRoom.forEach(
    //   async (chore) => await ApiClientService.deleteChore(chore._id)
    // );
    getRoomData();
  }

  useEffect(() => {
    getRoomData();
    getChoreData();
  }, []);
  return (
    <View style={styles.container}>
      {roomData.map((room) => (
        <RoomItem
          choreData={choreData}
          room={room}
          key={room._id}
          addChoresModal={addChoresModal}
          editChoresModal={editChoresModal}
        />
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
      <Modal visible={addChoreModal}>
        <View style={styles.modal}>
          <AddChoreForm curRoom={curRoom} addChore={addChore} />
          <TouchableOpacity onPress={addChoresModal}>
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible={editChoreModal}>
        <View style={styles.modal}>
          <Text>edit Chores</Text>
          <TouchableOpacity onPress={editChoresModal}>
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
