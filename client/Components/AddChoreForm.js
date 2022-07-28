import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Styles/EditRoomFormStyles';
import { useState } from 'react';

export default function AddChoreForm({ curRoom }) {
  return (
    <View>
      <Text>Add Task</Text>
      <Text>{curRoom.room}</Text>
      <TextInput placeholder="Task Name..." />
      <Text>Time required</Text>
      <TextInput placeholder="00:00" />
      <Text>Priority rating</Text>
      <View>
        <Text>Frequency</Text>
        <Text>Frequency measure</Text>
        <Text>No more than every:</Text>
        <TextInput placeholder="Frequency..." />
        <Text>Should be done every:</Text>
        <TextInput placeholder="Frequency..." />
        <Text>No less than every:</Text>
        <TextInput placeholder="Frequency..." />
      </View>
      <TextInput placeholder="Notes..." />
    </View>
  );
}
