import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import React from 'react';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function EditRoomForm({ roomData, addRoom, deleteRoom }) {
  const [newRoom, setNewRoom] = useState('');
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [curRoom, setCurRoom] = useState('');

  function areYouSure(room) {
    setConfirmPopUp(true);
    setCurRoom(room);
  }
  function cancel() {
    setConfirmPopUp(false);
  }

  return (
    <View style={styles.container}>
      <Text style={globalElements.h1}>Edit Rooms:</Text>
      {roomData.map((room) => {
        return (
          <View style={[globalElements.row, styles.inputRow]} key={room._id}>
            <Text style={[styles.input, globalElements.input]}>
              {' '}
              {room.room}
            </Text>
            <TouchableOpacity
              style={[globalElements.buttonOrange, styles.button]}
              onPress={() => areYouSure(room)}
              accessibilityLabel="Delete room"
            >
              <Feather
                name="minus"
                style={[globalElements.icon, styles.icon]}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={styles.button}
              onPress={() => {
                cancel();
              }}
            >
              <Feather name="check" style={styles.icon} />
            </TouchableOpacity> */}
          </View>
        );
      })}
      <View style={[globalElements.row, styles.inputRow]}>
        <TextInput
          style={[styles.input, globalElements.input]}
          onChangeText={setNewRoom}
          value={newRoom}
          placeholder="Add new room..."
          maxLength={15}
        />
        <TouchableOpacity
          style={[globalElements.buttonOrange, styles.button]}
          onPress={() => {
            addRoom(newRoom);
            setNewRoom('');
            cancel();
          }}
          accessibilityLabel="Add room"
        >
          <Feather name="plus" style={[globalElements.icon, styles.icon]} />
        </TouchableOpacity>
      </View>
      {confirmPopUp && (
        <View style={[globalElements.row, styles.inputRow]}>
          <View>
            {/* <Text>Warning: this will delete any chores for this room</Text> */}
            <Text style={globalElements.p}>Are you sure?</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              deleteRoom(curRoom);
              cancel();
            }}
            style={globalElements.buttonOrange}
            accessibilityLabel="Yes, I want to delete the room"
          >
            <Text style={globalElements.pWhite}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalElements.buttonOrange}
            accessibilityLabel="No, I do not want to delete the room"
          >
            <Text onPress={cancel} style={globalElements.pWhite}>
              No
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
