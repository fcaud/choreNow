import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';
import React from 'react';

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
      {roomData.map((room) => {
        return (
          <View style={styles.row} key={room._id}>
            <Text style={styles.input}> {room.room}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => areYouSure(room)}
            >
              <Feather name="minus" style={styles.icon} />
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
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={setNewRoom}
          value={newRoom}
          placeholder="Add new room..."
          maxLength={15}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            addRoom(newRoom);
            setNewRoom('');
            cancel();
          }}
        >
          <Feather name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
      {confirmPopUp && (
        <View style={styles.row}>
          <View>
            {/* <Text>Warning: this will delete any chores for this room</Text> */}
            <Text>Are you sure?</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              deleteRoom(curRoom);
              cancel();
            }}
          >
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text onPress={cancel}>No</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
