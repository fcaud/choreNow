import { NavBar, RoomItem } from '../Components/index';
import { EditRoomForm, AddChoreForm, EditChoreForm } from '../Features/index';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { styles } from './Styles/RoomViewStyles';
import ApiClientService from '../Services/ApiClientService';
import { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';
import React from 'react';

export default function RoomView({ navigation }) {
  const [roomData, setRoomData] = useState([]);
  const [curRoom, setCurRoom] = useState({});
  const [choreData, setChoreData] = useState([]);
  const [curChore, setCurChore] = useState({});
  const [roomModal, setRoomModal] = useState(false);
  const [addChoreModal, setAddChoreModal] = useState(false);
  const [editChoreModal, setEditChoreModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isFocused = useIsFocused();

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
    const data = await ApiClientService.getRankedChores();
    setChoreData(data);
    setIsLoading(false);
  }
  async function fetchData() {
    await getRoomData();
    await getChoreData();
  }
  useEffect(() => {
    if (isFocused) fetchData();
    else setIsLoading(true);
  }, [isFocused]);

  async function addRoom(room) {
    if (!room) return;
    const newRoom = await ApiClientService.createRoom({ room });
    setRoomData([...roomData, newRoom]);
  }
  async function addChore(chore) {
    if (!chore) return;
    const newChore = await ApiClientService.createChore(chore);
    setChoreData([...choreData, newChore]);
  }
  async function editChore(chore) {
    if (!chore) return;
  }
  async function deleteRoom(room) {
    await ApiClientService.deleteRoom({ _id: room._id });
    // const choresForRoom = choreData.filter((chore) => chore.room === room.room);
    // await choresForRoom.forEach(
    //   async (chore) => await ApiClientService.deleteChore(chore._id)
    // );
    getRoomData();
  }

  async function choreCompleted(_id, date) {
    await checkOffChore(_id, date);
    await fetchData();
  }
  async function choreRemoveCompleted(_id, date) {
    await uncheckChore(_id, date);
    await fetchData();
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {roomData.map((room) => (
            <RoomItem
              choreData={choreData}
              room={room}
              key={room._id}
              addChoresModal={addChoresModal}
              editChoresModal={editChoresModal}
              choreCompleted={choreCompleted}
              choreRemoveCompleted={choreRemoveCompleted}
            />
          ))}
        </ScrollView>
      )}

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
          <EditChoreForm curRoom={curRoom} editChore={editChore} />
          <TouchableOpacity onPress={editChoresModal}>
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
      <NavBar navigation={navigation} />
    </View>
  );
}
