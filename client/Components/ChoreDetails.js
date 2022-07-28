import { View, Text } from 'react-native';
import { styles } from './Styles/ChoreDetailsStyles';

export default function ChoreDetails() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.indicator}></View>
        <View>
          <Text> priority</Text>
          <Text> to complete</Text>
          <Text> Last done ago</Text>
        </View>
        <View>
          <Text style={styles.text}>Frequency:</Text>
          <View style={styles.freqWrapper}>
            <Text>3</Text>
            <View style={styles.desiredFreqWrapper}>
              <Text style={styles.text}>4</Text>
            </View>
            <Text>6</Text>
          </View>
          <Text style={styles.text}>months</Text>
        </View>
      </View>
      <Text>Notes:</Text>
    </View>
  );
}
