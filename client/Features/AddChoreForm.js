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
import { globalElements } from '../Utils/GlobalStylingElements';
import Feather from 'react-native-vector-icons/Feather';

export default function AddChoreForm({ curRoom, addChore }) {
  const [time, setTime] = useState({ hours: '00', mins: '00' });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [showPriorityPicker, setShowPriorityPicker] = useState(false);
  const [showFreqUnitPicker, setShowFreqUnitPicker] = useState(false);
  const [choreData, setChoreData] = useState({
    taskName: '',
    room: curRoom.room,
    priority: 'Medium',
    timeToComplete: 0,
    dateLastCompleted: 0,
    freqUnit: 'days',
    minFreq: 0,
    maxFreq: 0,
    desiredFreq: 0,
  });

  return (
    <ScrollView>
      <Text style={globalElements.h1}>Add Chore</Text>
      <Text style={globalElements.h2}>{curRoom.room}</Text>
      <TextInput
        placeholder="Chore Name..."
        maxLength={20}
        onChangeText={updateChoreData('taskName', setChoreData)}
        autoCapitalize="sentences"
        style={globalElements.input}
      />
      <View style={globalElements.row}>
        <Text style={globalElements.p}>Time required </Text>
        <View
          style={[globalElements.timeInputWrapper, { alignSelf: 'flex-start' }]}
        >
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
            style={globalElements.inputText}
          />
          <Text style={globalElements.inputText}>:</Text>
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
            style={globalElements.inputText}
          />
        </View>
      </View>
      <View>
        {time.hours > 23 && (
          <Text style={globalElements.pGreyed}>Hours invalid</Text>
        )}
        {time.mins > 59 && (
          <Text style={globalElements.pGreyed}>Mins invalid</Text>
        )}
      </View>
      <View style={globalElements.row}>
        <Text style={globalElements.p}>Priority rating</Text>
        <TouchableOpacity
          onPress={() => setShowPriorityPicker(!showPriorityPicker)}
          style={[globalElements.buttonOrange, globalElements.row]}
        >
          <Text style={globalElements.pWhite}>{choreData.priority}</Text>
          <Feather
            name={showPriorityPicker ? 'chevron-up' : 'chevron-down'}
            style={[globalElements.pWhite]}
          />
        </TouchableOpacity>
      </View>
      {showPriorityPicker && (
        <Picker
          selectedValue={choreData.priority}
          onValueChange={updateChoreData('priority', setChoreData)}
          style={[globalElements.p]}
        >
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Medium" value="Medium" />
          <Picker.Item label="Low" value="Low" />
        </Picker>
      )}
      <View style={[globalElements.borderedView, styles.freqContainer]}>
        <Text style={[globalElements.p, styles.freqTitle]}>Frequency</Text>
        <View style={globalElements.row}>
          <Text style={globalElements.p}>Unit</Text>
          <TouchableOpacity
            onPress={() => setShowFreqUnitPicker(!showFreqUnitPicker)}
            style={[globalElements.buttonOrange, globalElements.row]}
          >
            <Text style={globalElements.pWhite}>{choreData.freqUnit}</Text>
            <Feather
              name={showFreqUnitPicker ? 'chevron-up' : 'chevron-down'}
              style={[globalElements.pWhite]}
            />
          </TouchableOpacity>
        </View>
        {showFreqUnitPicker && (
          <Picker
            selectedValue={choreData.freqUnit}
            onValueChange={updateChoreData('freqUnit', setChoreData)}
            style={[globalElements.p]}
          >
            <Picker.Item label="days" value="days" />
            <Picker.Item label="weeks" value="weeks" />
            <Picker.Item label="months" value="months" />
          </Picker>
        )}
        <Text style={globalElements.p}>No more than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('minFreq', setChoreData)}
          style={globalElements.input}
        />
        <Text style={globalElements.p}>Should be done every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('desiredFreq', setChoreData)}
          style={globalElements.input}
        />
        <Text style={globalElements.p}>No less than every:</Text>
        <TextInput
          placeholder="Frequency..."
          keyboardType="numeric"
          onChangeText={updateChoreData('maxFreq', setChoreData)}
          style={globalElements.input}
        />
      </View>
      <TextInput
        placeholder="Notes..."
        onChangeText={updateChoreData('notes', setChoreData)}
        style={globalElements.input}
      />
      {choreData.taskName &&
      choreData.timeToComplete &&
      choreData.minFreq &&
      choreData.maxFreq &&
      choreData.desiredFreq ? (
        <TouchableOpacity
          disabled={disableSubmit}
          onPress={() => addChore(choreData)}
          style={[globalElements.buttonOrange, styles.button]}
        >
          <Text style={globalElements.pWhite}>Create chore</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          disabled={true}
          style={[globalElements.buttonOrange, styles.button]}
        >
          <Text style={globalElements.pWhite}>Create chore</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
