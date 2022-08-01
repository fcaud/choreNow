import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreNowInputFormStyles';
import { TimeInput } from '../Components/index';
import { useState } from 'react';
import React from 'react';

export default function ChoreNowInputForm({ selectChores, setTimeOutput }) {
  const [disableSubmit, setDisableSubmit] = useState(true);

  return (
    <View>
      <Text>How long do you want to spend?</Text>
      <TimeInput
        setDisableSubmit={setDisableSubmit}
        setTimeOutput={setTimeOutput}
        id={1}
        defaultVal={{ mins: null, hours: null }}
      />
      <TouchableOpacity disabled={disableSubmit} onPress={selectChores}>
        <Text>ChoreNow</Text>
      </TouchableOpacity>
    </View>
  );
}
