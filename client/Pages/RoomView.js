import React, { useEffect, useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { NavBar, RoomItem } from '../Components/index';
import { EditRoomForm, AddChoreForm, EditChoreForm } from '../Features/index';
import ApiClientService from '../Services/ApiClientService';
import { checkOffChore, uncheckChore } from '../Services/ApiHelpers';
import { styles } from './Styles/RoomViewStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { globalElements } from '../Utils/GlobalStylingElements';

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
  function editChoresModal(chore) {
    setEditChoreModal(!editChoreModal);
    setCurRoom(chore.room);
    setCurChore(chore);
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
    setAddChoreModal(false);
  }
  async function editChore(prevChore, updatedChore) {
    if (
      !(
        updatedChore.taskName ||
        updatedChore.maxFreq ||
        updatedChore.minFreq ||
        updatedChore.desiredFreq ||
        updatedChore.timeToComplete
      )
    )
      return;
    //adding back the values which are not input into the form
    updatedChore = {
      ...updatedChore,
      dateLastCompleted: prevChore.dateLastCompleted,
      room: prevChore.room,
    };
    await ApiClientService.editChore(prevChore._id, updatedChore);
    getChoreData();
    setEditChoreModal(false);
  }
  async function deleteChore(_id) {
    await ApiClientService.deleteChore({ _id });
    getChoreData();
    setEditChoreModal(false);
  }
  async function deleteRoom(room) {
    await ApiClientService.deleteRoom({ _id: room._id });
    //TODO update so delete removes underlying chores
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
        <>
          <Text style={globalElements.h1}>Your Chores</Text>
          <ScrollView
            style={[globalElements.scrollView, styles.scrollContainer]}
          >
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
          <TouchableOpacity
            onPress={editRoomsModal}
            style={[globalElements.buttonOrange, { marginBottom: 8 }]}
          >
            <Text
              style={[globalElements.pWhite, { marginLeft: 4, marginRight: 4 }]}
            >
              Edit rooms
            </Text>
          </TouchableOpacity>
        </>
      )}

      <Modal visible={roomModal} style={{ backgroundColor: 'red' }}>
        <View
          style={{
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <View style={[styles.modal, globalElements.borderedView]}>
            <EditRoomForm
              roomData={roomData}
              addRoom={addRoom}
              deleteRoom={deleteRoom}
            />
            <TouchableOpacity
              onPress={editRoomsModal}
              style={[globalElements.roundButton]}
              accessibilityLabel="Close modal"
            >
              <Ionicons name="close" style={globalElements.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal visible={addChoreModal}>
        <View style={styles.modal}>
          <AddChoreForm curRoom={curRoom} addChore={addChore} />
          <TouchableOpacity
            onPress={addChoresModal}
            accessibilityLabel="Close modal"
          >
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal visible={editChoreModal}>
        <View style={styles.modal}>
          <EditChoreForm
            curRoom={curRoom}
            editChore={editChore}
            curChore={curChore}
            deleteChore={deleteChore}
          />
          <TouchableOpacity
            onPress={editChoresModal}
            accessibilityLabel="Close modal"
          >
            <Ionicons name="close" />
          </TouchableOpacity>
        </View>
      </Modal>
      <NavBar navigation={navigation} />
    </View>
  );
}
