import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/RoomItemStyles';
import Feather from 'react-native-vector-icons/Feather';
import ChoreItem from './ChoreItem';
import { useEffect } from 'react';

export default function RoomItem({ choreData, room }) {
  const choresForRoom = choreData.filter((chore) => chore.room === room.room);
  console.log('chore4room', choresForRoom);

  return (
    <View>
      <View style={styles.roomHeader}>
        <Text style={styles.text}>{room.room}</Text>
        <TouchableOpacity>
          <Feather name="plus" style={styles.icon} />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Feather name="chevron-up" style={styles.icon} />
        </TouchableOpacity> */}
        <TouchableOpacity>
          <Feather name="chevron-down" style={styles.icon} />
        </TouchableOpacity>
      </View>
      {choresForRoom.map((chore) => (
        <ChoreItem chore={chore} key={chore._id} />
      ))}
    </View>
  );
}
