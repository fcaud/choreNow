import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';

export default function EditRoomForm({ roomData, addRoom, deleteRoom }) {
  const [newRoom, setNewRoom] = useState('');

  // function updateNewRoom(event) {
  //   console.log(event.target.value);
  //   setNewRoom(event.target.value);
  // }
  return (
    <View style={styles.container}>
      {roomData.map((room) => {
        return (
          <View style={styles.row} key={room._id}>
            <TextInput value={room.room} style={styles.input} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => deleteRoom(room._id)}
            >
              <Feather name="minus" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="check" style={styles.icon} />
            </TouchableOpacity>
          </View>
        );
      })}
      <View style={styles.row}>
        <TextInput style={styles.input} onChangeText={setNewRoom} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => addRoom(newRoom)}
        >
          <Feather name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
