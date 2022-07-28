import { View, Text } from 'react-native';
import { styles } from './Styles/ChoreDetailsStyles';
import moment from 'moment';

export default function ChoreDetails({ chore }) {
  const hoursDur = Number(chore.timeToComplete.split(':')[0]);
  const minsDur = Number(chore.timeToComplete.split(':')[1]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.indicator}></View>
        <View>
          <Text> {chore.priority} priority</Text>
          <Text>
            {' '}
            {!hoursDur
              ? ''
              : hoursDur === 1
              ? `${hoursDur} hr`
              : `${hoursDur} hrs`}{' '}
            {!minsDur
              ? ''
              : minsDur === 1
              ? `${minsDur} min`
              : `${minsDur} mins`}{' '}
            to complete
          </Text>
          <Text>
            Last done {moment(chore.dateLastCompleted, 'YYYYMMDD').fromNow()}
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