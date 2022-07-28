import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreWrapperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChoreDetails from './ChoreDetails';

export default function ChoreWrapper() {
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
      <ChoreDetails />
    </View>
  );
}
