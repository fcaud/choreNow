import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles/TimeInputStyles';
import { useState } from 'react';

export default function TimeInput({ setDisableSubmit, setTimeOutput, id }) {
  const [time, setTime] = useState({ hours: 0, mins: 0, total: 0 });

  function formatTime(field) {
    return (newFieldVal) => {
      let total;
      if (field === 'hours') {
        total = Number(newFieldVal * 60) + Number(time.mins);
      } else {
        total = Number(newFieldVal) + Number(time.hours * 60);
      }

      setTime((oldVal) => {
        return {
          ...oldVal,
          [field]: newFieldVal,
          total: total,
        };
      });
      if (
        (field === 'hours' && newFieldVal > 23) ||
        (field === 'mins' && newFieldVal > 59) ||
        total === 0
      ) {
        setDisableSubmit(true);
      } else {
        setDisableSubmit(false);
      }
      setTimeOutput((oldVal) => ({ ...oldVal, [id]: total }));
    };
  }

  return (
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
  );
}
