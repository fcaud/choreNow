import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreNowInputFormStyles';
import { TimeInput } from '../Components/index';
import { useState } from 'react';

export default function ChoreNowInputForm() {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [timeOutput, setTimeOutput] = useState({});
  return (
    <View>
      <Text>How long do you want to spend?</Text>
      <TimeInput
        setDisableSubmit={setDisableSubmit}
        setTimeOutput={setTimeOutput}
        id={1}
        defaultVal={{ mins: undefined, hours: undefined }}
      />
      <TouchableOpacity>
        <Text>ChoreNow</Text>
      </TouchableOpacity>
    </View>
  );
}
