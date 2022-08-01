import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreWrapperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ChoreDetails from './ChoreDetails';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';
import React, { useState } from 'react';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function ChoreWrapper({
  chore,
  choreCompleted,
  choreRemoveCompleted,
}) {
  const [showChoreDetails, setShowChoreDetails] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          {checkIfCompletedToday(chore) ? (
            <Text style={[styles.completed, globalElements.pWhite]}>
              {chore.taskName}
            </Text>
          ) : (
            <Text style={globalElements.pWhite}>{chore.taskName}</Text>
          )}
          <Text style={[globalElements.pWhite, styles.subText]}>
            {chore.room}
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={globalElements.roundButton}
            onPress={() => setShowChoreDetails(!showChoreDetails)}
          >
            <FontAwesome
              name="info"
              style={
                showChoreDetails
                  ? globalElements.icon
                  : globalElements.iconGreyed
              }
            />
          </TouchableOpacity>
          {checkIfCompletedToday(chore) ? (
            <TouchableOpacity
              style={globalElements.roundButton}
              onPress={() =>
                choreRemoveCompleted(chore._id, chore.prevDateLastCompleted)
              }
            >
              <Feather name="check" style={globalElements.icon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={globalElements.roundButton}
              onPress={() => choreCompleted(chore._id, chore.dateLastCompleted)}
            >
              <Feather name="check" style={globalElements.iconGreyed} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showChoreDetails && (
        <View style={styles.detailsWrapper}>
          <ChoreDetails chore={chore} />
        </View>
      )}
    </View>
  );
}
