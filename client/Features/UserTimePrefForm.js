import React from 'react';
import { View, Text } from 'react-native';
import { TimeInput } from '../Components/index';
import { styles } from './Styles/UserTimePrefFormStyles';
import { minsToHoursAndMins } from '../Utils/HelperFunctions';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function UserTimePreferenceForm({
  setDisableSubmit,
  setTimeOutput,
  settingsData,
}) {
  return (
    <View>
      <Text style={[globalElements.p]}>Daily chore limits:</Text>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Monday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'mon'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.mon)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Tuesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'tue'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.tue)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Wednesday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'wed'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.wed)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Thursday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'thu'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.thu)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Friday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'fri'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.fri)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Saturday</Text>
        <TimeInput
          setDisableSubmit={setDisableSubmit}
          id={'sat'}
          setTimeOutput={setTimeOutput}
          defaultVal={minsToHoursAndMins(settingsData.sat)}
        />
      </View>
      <View style={[globalElements.row]}>
        <Text style={[globalElements.p, styles.p]}>Sunday</Text>
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
