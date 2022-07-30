import { View, Text } from 'react-native';
import { TimeInput } from '../Components/index';
import { styles } from './Styles/UserTimePrefFormStyles';
import { useState } from 'react';

export default function UserTimePreferenceForm({
  setDisableSubmit,
  setTimeOutput,
}) {
  return (
    <View>
      <Text>Daily chore limits:</Text>
      <View style={styles.row}>
        <Text>Monday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'mon'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Tuesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'tue'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Wednesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'wed'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Thursday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'thu'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Friday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'fri'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Saturday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'sat'}
          setTimeOutput={setTimeOutput}
        />
      </View>
      <View style={styles.row}>
        <Text>Sunday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'sun'}
          setTimeOutput={setTimeOutput}
        />
      </View>
    </View>
  );
}
