import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/AddChoreFormStyles';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function AddChoreForm({ curRoom }) {
  const [freqMeasure, setFreqMeasure] = useState('days');
  const [priority, setPriority] = useState('Medium');
  return (
    <View>
      <Text>Add Task</Text>
      <Text>{curRoom.room}</Text>
      <TextInput placeholder="Task Name..." maxLength={20} />

      <Text>Time required</Text>
      <View style={styles.row}>
        <TextInput placeholder="00" keyboardType="numeric" />
        <Text>:</Text>
        <TextInput placeholder="00" keyboardType="numeric" />
      </View>

      <Text>Priority rating</Text>
      <View>
        <Picker
          selectedValue={priority}
          onValueChange={(val) => setPriority(val)}
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
          selectedValue={freqMeasure}
          onValueChange={(val) => setFreqMeasure(val)}
        >
          <Picker.Item label="days" value="days" />
          <Picker.Item label="weeks" value="weeks" />
          <Picker.Item label="months" value="months" />
        </Picker>
        <Text>No more than every:</Text>
        <TextInput placeholder="Frequency..." keyboardType="numeric" />
        <Text>Should be done every:</Text>
        <TextInput placeholder="Frequency..." keyboardType="numeric" />
        <Text>No less than every:</Text>
        <TextInput placeholder="Frequency..." keyboardType="numeric" />
      </View>
      <TextInput placeholder="Notes..." />
      <TouchableOpacity>
        <Text>Create task</Text>
      </TouchableOpacity>
    </View>
  );
}
