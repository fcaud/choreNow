import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreItemStyles';
import ChoreDetails from './ChoreDetails';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

export default function RoomItem() {
  return (
    <View>
      <View style={styles.choreHeader}>
        <Text style={styles.text}>Chore</Text>
        <TouchableOpacity>
          <Feather name="check" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="pencil" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="chevron-down" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.choreDetailsWrapper}>
        <ChoreDetails />
      </View>
    </View>
  );
}
