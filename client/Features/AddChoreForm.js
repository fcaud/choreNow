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
  updateChoreData,
  formatTime,
} from '../Utils/AddEditChoreHelperFunctions';
import { TimeInput } from '../Components/index';

export default function AddChoreForm({ curRoom, addChore }) {
  const [time, setTime] = useState({ hours: '00', mins: '00' });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [showPriorityPicker, setShowPriorityPicker] = useState(false);
  const [showFreqUnitPicker, setShowFreqUnitPicker] = useState(false);
  const [choreData, setChoreData] = useState({
    taskName: '',
    room: curRoom.room,
    priority: 'Medium',
    timeToComplete: '00:00',
    dateLastCompleted: 0,
    freqUnit: 'days',
    minFreq: 0,
    maxFreq: 0,
    desiredFreq: 0,
  });

  return (
    <ScrollView>
      <Text>Add Chore</Text>
      <Text>{curRoom.room}</Text>
      <TextInput
        placeholder="Chore Name..."
        maxLength={20}
        onChangeText={updateChoreData('taskName', setChoreData)}
        autoCapitalize="sentences"
      />
      <Text>Time required </Text>
      <TimeInput
        setDisableSubmit={setDisableSubmit}
        id={1}
        setTimeOutput={setTime}
        defaultVal={{ hours: null, mins: null }}
      />
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
          onChangeText={updateChoreData('minFreq', setChoreData)}
        />
        <Text>Should be done every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('desiredFreq', setChoreData)}
        />
        <Text>No less than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('maxFreq', setChoreData)}
        />
      </View>
      <TextInput
        placeholder="Notes..."
        onChangeText={updateChoreData('notes', setChoreData)}
      />
      {choreData.taskName &&
      choreData.timeToComplete &&
      choreData.minFreq &&
      choreData.maxFreq &&
      choreData.desiredFreq ? (
        <TouchableOpacity
          disabled={disableSubmit}
          onPress={() => addChore(choreData)}
        >
          <Text>Create chore</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true}>
          <Text>Create chore</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
