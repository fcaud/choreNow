import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreWrapperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ChoreDetails from './ChoreDetails';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';

export default function ChoreWrapper({
  chore,
  choreCompleted,
  choreRemoveCompleted,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          {checkIfCompletedToday(chore) ? (
            <Text style={[styles.completed, styles.text]}>
              {chore.taskName}
            </Text>
          ) : (
            <Text style={styles.text}>{chore.taskName}</Text>
          )}
          <Text style={[styles.text, styles.subText]}>{chore.room}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="info" style={styles.icon} />
        </TouchableOpacity>
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
      </View>
      <ChoreDetails chore={chore} />
    </View>
  );
}
