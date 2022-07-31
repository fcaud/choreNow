import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreItemStyles';
import ChoreDetails from './ChoreDetails';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { checkIfCompletedToday } from '../Utils/HelperFunctions';

export default function RoomItem({ chore, editChoresModal, choreCompleted }) {
  return (
    <View>
      <View style={styles.choreHeader}>
        {checkIfCompletedToday(chore) ? (
          <Text style={[styles.completed, styles.text]}>{chore.taskName}</Text>
        ) : (
          <Text style={styles.text}>{chore.taskName}</Text>
        )}
        <TouchableOpacity
          onPress={() => choreCompleted(chore._id, chore.dateLastCompleted)}
        >
          <Feather name="check" style={styles.icon} />
        </TouchableOpacity>
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
