import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles/ChoreDetailsStyles';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ChoreDetails({ chore }) {
  const minsDur = chore.timeToComplete % 60;
  const hoursDur = (chore.timeToComplete - minsDur) / 60;
  const defaultTime = '1970-01-01T00:00:00.000Z';

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={
            chore.status === 'Overdue'
              ? [styles.indicator, styles.overdue]
              : chore.status === 'Due'
              ? [styles.indicator, styles.due]
              : chore.status === 'Nearly due'
              ? [styles.indicator, styles.nearlyDue]
              : [styles.indicator, styles.notDue]
          }
        >
          <Text style={styles.indicatorText}>Status</Text>
        </View>
        <View
          style={
            chore.priority === 'High'
              ? [styles.indicator, styles.high]
              : chore.priority === 'Medium'
              ? [styles.indicator, styles.medium]
              : [styles.indicator, styles.low]
          }
        >
          <Text style={styles.indicatorText}>Priority</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.timeWrapper}>
          <Text style={styles.text}>
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
            <Text style={styles.text}>Task not previously done</Text>
          ) : (
            <Text style={styles.text}>
              Last done{' '}
              {moment(chore.dateLastCompleted, 'YYYYMMDDHH').fromNow()}
            </Text>
          )}
        </View>
        <View>
          <Text style={styles.textCenter}>Every</Text>
          <View style={styles.freqWrapper}>
            <Text style={styles.textCenter}>{chore.minFreq}</Text>
            <AntDesign name="caretleft" style={styles.carets} />
            <View style={styles.desiredFreqWrapper}>
              <Text style={styles.textCenter}>{chore.desiredFreq}</Text>
            </View>
            <AntDesign name="caretright" style={styles.carets} />
            <Text style={styles.subFreq}>{chore.maxFreq}</Text>
          </View>
          <Text style={styles.textCenter}>{chore.freqUnit}</Text>
        </View>
      </View>
      {chore.notes && (
        <View style={styles.notesWrapper}>
          <Text style={styles.text}>Notes:</Text>
          <Text style={[styles.text, { maxWidth: '90%' }]}>{chore.notes}</Text>
        </View>
      )}
    </View>
  );
}
