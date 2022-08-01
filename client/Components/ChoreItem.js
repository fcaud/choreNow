import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreItemStyles';
import ChoreDetails from './ChoreDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';
import React from 'react';

export default function RoomItem({
  chore,
  editChoresModal,
  choreCompleted,
  choreRemoveCompleted,
}) {
  return (
    <View>
      <View style={styles.choreHeader}>
        {checkIfCompletedToday(chore) ? (
          <Text style={[styles.completed, styles.text]}>{chore.taskName}</Text>
        ) : (
          <Text style={styles.text}>{chore.taskName}</Text>
        )}
        {checkIfCompletedToday(chore) ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              choreRemoveCompleted(chore._id, chore.prevDateLastCompleted)
            }
          >
            <AntDesign name="checkcircle" style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => choreCompleted(chore._id, chore.dateLastCompleted)}
          >
            <AntDesign name="checkcircleo" style={styles.icon} />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <Octicons
            name="pencil"
            style={styles.icon}
            onPress={editChoresModal}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="chevron-down" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.choreDetailsWrapper}>
        <ChoreDetails chore={chore} />
      </View>
    </View>
  );
}
