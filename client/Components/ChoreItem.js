import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreItemStyles';
import ChoreDetails from './ChoreDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function RoomItem({
  chore,
  editChoresModal,
  choreCompleted,
  choreRemoveCompleted,
}) {
  const [showChoreDetails, setShowChoreDetails] = useState(false);
  return (
    <View>
      <View style={styles.choreHeader}>
        {checkIfCompletedToday(chore) ? (
          <Text style={[styles.completed, globalElements.p, styles.text]}>
            {chore.taskName}
          </Text>
        ) : (
          <Text style={[globalElements.p, styles.text]}>{chore.taskName}</Text>
        )}
        <View style={[globalElements.row, styles.iconWrapper]}>
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
              onPress={() => editChoresModal(chore)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShowChoreDetails(!showChoreDetails)}
          >
            <Feather
              name={showChoreDetails ? 'chevron-up' : 'chevron-down'}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {showChoreDetails && (
        <View style={styles.choreDetailsWrapper}>
          <ChoreDetails chore={chore} />
        </View>
      )}
    </View>
  );
}
