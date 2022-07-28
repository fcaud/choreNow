import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/RoomItemStyles';
import Feather from 'react-native-vector-icons/Feather';
import ChoreItem from './ChoreItem';

export default function RoomItem() {
  return (
    <View>
      <View style={styles.roomHeader}>
        <Text>Room</Text>
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
      <ChoreItem />
    </View>
  );
}
