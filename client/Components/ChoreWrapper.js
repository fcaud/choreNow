import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreWrapperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChoreDetails from './ChoreDetails';

export default function ChoreWrapper() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>Clean oven</Text>
          <Text style={[styles.text, styles.subText]}>Kitchen</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="info" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="check" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ChoreDetails />
    </View>
  );
}
