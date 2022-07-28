import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreWrapperStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ChoreDetails from './ChoreDetails';

export default function ChoreWrapper({ chore }) {
  console.log('ChoreWrapper chore', chore);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>{chore.taskName}</Text>
          <Text style={[styles.text, styles.subText]}>{chore.room}</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="info" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="check" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ChoreDetails chore={chore} />
    </View>
  );
}
