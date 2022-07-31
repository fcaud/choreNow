import { View, Text } from 'react-native';
import { TimeInput } from '../Components/index';
import { styles } from './Styles/UserTimePrefFormStyles';
import { minsToHoursAndMins } from '../Utils/HelperFunctions';

export default function UserTimePreferenceForm({
  setDisableSubmit,
  setTimeOutput,
  settingsData,
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
          defaultVal={minsToHoursAndMins(settingsData.mon)}
        />
      </View>
      <View style={styles.row}>
        <Text>Tuesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'tue'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.tue)}
        />
      </View>
      <View style={styles.row}>
        <Text>Wednesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'wed'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.wed)}
        />
      </View>
      <View style={styles.row}>
        <Text>Thursday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'thu'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.thu)}
        />
      </View>
      <View style={styles.row}>
        <Text>Friday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'fri'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.fri)}
        />
      </View>
      <View style={styles.row}>
        <Text>Saturday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'sat'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.sat)}
        />
      </View>
      <View style={styles.row}>
        <Text>Sunday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'sun'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.sun)}
        />
      </View>
    </View>
  );
}
