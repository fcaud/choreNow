import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/RoomItemStyles';
import Feather from 'react-native-vector-icons/Feather';
import ChoreItem from './ChoreItem';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function RoomItem({
  choreData,
  room,
  addChoresModal,
  editChoresModal,
  choreCompleted,
  choreRemoveCompleted,
}) {
  const choresForRoom = choreData.filter((chore) => chore.room === room.room);
  const [showChoreList, setShowChoreList] = useState(false);

  return (
    <View>
      <View style={[styles.roomHeader]}>
        <Text style={[globalElements.pWhite, styles.text]}>{room.room}</Text>
        <View
          style={[globalElements.row, { marginRight: 10, alignSelf: 'center' }]}
        >
          <TouchableOpacity
            onPress={() => addChoresModal(room)}
            style={[styles.button]}
          >
            <Feather name="plus" style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowChoreList(!showChoreList)}
            style={[styles.button]}
          >
            <Feather
              name={showChoreList ? 'chevron-up' : 'chevron-down'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showChoreList &&
        choresForRoom.map((chore) => (
          <ChoreItem
            chore={chore}
            key={chore._id}
            editChoresModal={editChoresModal}
            choreCompleted={choreCompleted}
            choreRemoveCompleted={choreRemoveCompleted}
          />
        ))}
    </View>
  );
}
