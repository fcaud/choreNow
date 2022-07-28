import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import Feather from 'react-native-vector-icons/Feather';

export default function EditRoomForm({ roomData }) {
  return (
    <View style={styles.container}>
      {roomData.map((room) => {
        return (
          <View style={styles.row}>
            <TextInput value={room.room} style={styles.input} />
            <TouchableOpacity style={styles.button}>
              <Feather name="minus" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="check" style={styles.icon} />
            </TouchableOpacity>
          </View>
        );
      })}
      <View style={styles.row}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Feather name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
