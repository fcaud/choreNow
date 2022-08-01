import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { styles } from './Styles/AddChoreFormStyles';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  formatTime,
  updateChoreData,
} from '../Utils/AddEditChoreHelperFunctions';
import { minsToHoursAndMins } from '../Utils/HelperFunctions';

export default function EditChoreForm({
  curRoom,
  editChore,
  curChore,
  deleteChore,
}) {
  const [time, setTime] = useState({ hours: '00', mins: '00' });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [showPriorityPicker, setShowPriorityPicker] = useState(false);
  const [showFreqUnitPicker, setShowFreqUnitPicker] = useState(false);
  const [choreData, setChoreData] = useState(curChore);
  return (
    <ScrollView>
      <Text>Edit Chore</Text>
      <Text>{curRoom}</Text>
      <TextInput
        placeholder="Chore Name..."
        maxLength={20}
        onChangeText={updateChoreData(
          'taskName',
          setChoreData,
          setDisableSubmit
        )}
        autoCapitalize="sentences"
        value={choreData.taskName}
      />
      <Text>Time required </Text>
      <View style={styles.row}>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime(
            'hours',
            setChoreData,
            setTime,
            setDisableSubmit,
            time
          )}
          maxLength={2}
          value={minsToHoursAndMins(choreData.timeToComplete).hours}
        />
        <Text>:</Text>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime(
            'mins',
            setChoreData,
            setTime,
            setDisableSubmit,
            time
          )}
          maxLength={2}
          value={minsToHoursAndMins(choreData.timeToComplete).mins}
        />
        {time.hours > 23 && <Text>Please enter a valid time</Text>}
        {time.mins > 59 && <Text>Please enter a valid time</Text>}
      </View>

      <View style={styles.row}>
        <Text>Priority rating</Text>
        <TouchableOpacity
          onPress={() => setShowPriorityPicker(!showPriorityPicker)}
        >
          <Text>{choreData.priority}</Text>
        </TouchableOpacity>
      </View>
      {showPriorityPicker && (
        <Picker
          selectedValue={choreData.priority}
          onValueChange={updateChoreData('priority', setChoreData)}
        >
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Low" value="Low" />
        </Picker>
      )}
      <View>
        <Text>Frequency</Text>
        <View style={styles.row}>
          <Text>Frequency measure</Text>
          <TouchableOpacity
            onPress={() => setShowFreqUnitPicker(!showFreqUnitPicker)}
          >
            <Text>{choreData.freqUnit}</Text>
          </TouchableOpacity>
        </View>
        {showFreqUnitPicker && (
          <Picker
            selectedValue={choreData.freqUnit}
            onValueChange={updateChoreData('freqUnit', setChoreData)}
          >
            <Picker.Item label="days" value="days" />
            <Picker.Item label="weeks" value="weeks" />
            <Picker.Item label="months" value="months" />
          </Picker>
        )}
        <Text>No more than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData(
            'minFreq',
            setChoreData,
            setDisableSubmit
          )}
          value={choreData.minFreq.toString()}
        />
        <Text>Should be done every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData(
            'desiredFreq',
            setChoreData,
            setDisableSubmit
          )}
          value={choreData.desiredFreq.toString()}
        />
        <Text>No less than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData(
            'maxFreq',
            setChoreData,
            setDisableSubmit
          )}
          value={choreData.maxFreq.toString()}
        />
      </View>
      <TextInput
        placeholder="Notes..."
        onChangeText={updateChoreData('notes', setChoreData)}
        value={choreData.notes}
      />
      <View style={styles.row}>
        {choreData.taskName &&
        choreData.timeToComplete &&
        choreData.minFreq &&
        choreData.maxFreq &&
        choreData.desiredFreq ? (
          <TouchableOpacity
            disabled={disableSubmit}
            onPress={() => editChore(curChore, choreData)}
          >
            <Text>Update chore</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity disabled={true}>
            <Text>Update chore</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => deleteChore(curChore._id)}>
          <Text>Delete chore</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
