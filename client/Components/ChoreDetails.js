import { View, Text } from 'react-native';
import { styles } from './Styles/ChoreDetailsStyles';

export default function ChoreDetails({ chore }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.indicator}></View>
        <View>
          <Text> {chore.priority} priority</Text>
          <Text> {chore.timeToComplete} to complete</Text>
          <Text>
            Last done {chore.dateLastCompleted} {chore.freqUnit} ago
          </Text>
        </View>
        <View>
          <Text style={styles.text}>Frequency:</Text>
          <View style={styles.freqWrapper}>
            <Text>{chore.minFreq}</Text>
            <View style={styles.desiredFreqWrapper}>
              <Text style={styles.text}>{chore.desiredFreq}</Text>
            </View>
            <Text>{chore.maxFreq}</Text>
          </View>
          <Text style={styles.text}>{chore.freqUnit}</Text>
        </View>
      </View>
      <Text>Notes: {chore.notes}</Text>
    </View>
  );
}
