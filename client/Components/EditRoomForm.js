import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react';

export default function EditRoomForm({ roomData, addRoom, deleteRoom }) {
  const [newRoom, setNewRoom] = useState('');
  const [confirmPopUp, setConfirmPopUp] = useState(false);
  const [curId, setCurId] = useState('');

  function areYouSure(id) {
    setConfirmPopUp(true);
    setCurId(id);
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
              onPress={() => areYouSure(room._id)}
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
          <Text>Are you sure?</Text>
          <TouchableOpacity
            onPress={() => {
              deleteRoom(curId);
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
