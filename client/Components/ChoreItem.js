import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreItemStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ChoreItem() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Kitchen: clean oven</Text>
        <TouchableOpacity>
          <FontAwesome name="info" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="check" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
