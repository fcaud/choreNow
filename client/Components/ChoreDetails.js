import { View, Text } from 'react-native';
import { styles } from './Styles/ChoreDetailsStyles';
import moment from 'moment';

export default function ChoreDetails({ chore }) {
  const minsDur = chore.timeToComplete % 60;
  const hoursDur = (chore.timeToComplete - minsDur) / 60;
  const defaultTime = '1970-01-01T00:00:00.000Z';

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {chore.status === 'Overdue' && (
          <View style={[styles.indicator, styles.overdue]}></View>
        )}
        {chore.status === 'Due' && (
          <View style={[styles.indicator, styles.due]}></View>
        )}
        {chore.status === 'Nearly due' && (
          <View style={[styles.indicator, styles.nearlyDue]}></View>
        )}
        {chore.status === 'Not due' && (
          <View style={[styles.indicator, styles.notDue]}></View>
        )}
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
          {chore.dateLastCompleted === defaultTime ? (
            <Text>Task not previously done</Text>
          ) : (
            <Text>
              Last done {moment(chore.dateLastCompleted, 'YYYYMMDD').fromNow()}
            </Text>
          )}
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
      {chore.notes && <Text>Notes: {chore.notes}</Text>}
    </View>
  );
}
