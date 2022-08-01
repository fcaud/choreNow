import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/AddChoreFormStyles';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import React from 'react';

export default function AddChoreForm({ curRoom, addChore }) {
  const [time, setTime] = useState({ hours: '00', mins: '00' });
  const [disableSubmit, setDisableSubmit] = useState(false);
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

  function updateChoreData(field) {
    return (newFieldVal) => {
      if (newFieldVal) {
        setChoreData((oldVal) => {
          return { ...oldVal, [field]: newFieldVal };
        });
      }
    };
  }

  function formatTime(field) {
    return (newFieldVal) => {
      setChoreData((oldVal) => {
        if (field === 'hours')
          return {
            ...oldVal,
            timeToComplete: Number(time.mins) + Number(newFieldVal * 60),
          };
        if (field === 'mins')
          return {
            ...oldVal,
            timeToComplete: Number(newFieldVal) + Number(time.hours * 60),
          };
      });
      setTime((oldVal) => {
        return { ...oldVal, [field]: newFieldVal };
      });
      if (
        (field === 'hours' && newFieldVal > 23) ||
        (field === 'mins' && newFieldVal > 59)
      ) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }
    };
  }

  return (
    <View>
      <Text>Add Task</Text>
      <Text>{curRoom.room}</Text>
      <TextInput
        placeholder="Task Name..."
        maxLength={20}
        onChangeText={updateChoreData('taskName')}
        autoCapitalize="sentences"
      />
      <Text>Time required </Text>
      <View style={styles.row}>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('hours')}
          maxLength={2}
        />
        <Text>:</Text>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('mins')}
          maxLength={2}
        />
        {time.hours > 23 && <Text>Please enter a valid time</Text>}
        {time.mins > 59 && <Text>Please enter a valid time</Text>}
      </View>

      <Text>Priority rating</Text>
      <View>
        <Picker
          selectedValue={choreData.priority}
          onValueChange={updateChoreData('priority')}
        >
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Low" value="Low" />
        </Picker>
      </View>
      <View>
        <Text>Frequency</Text>
        <Text>Frequency measure</Text>
        <Picker
          selectedValue={choreData.freqUnit}
          onValueChange={updateChoreData('freqUnit')}
        >
          <Picker.Item label="days" value="days" />
          <Picker.Item label="weeks" value="weeks" />
          <Picker.Item label="months" value="months" />
        </Picker>
        <Text>No more than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('minFreq')}
        />
        <Text>Should be done every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('desiredFreq')}
        />
        <Text>No less than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('maxFreq')}
        />
      </View>
      <TextInput
        placeholder="Notes..."
        onChangeText={updateChoreData('notes')}
      />
      <TouchableOpacity
        disabled={disableSubmit}
        onPress={() => addChore(choreData)}
      >
        <Text>Create task</Text>
      </TouchableOpacity>
    </View>
  );
}
