import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles/TimeInputStyles';
import { useState } from 'react';
import React from 'react';

export default function TimeInput({
  setDisableSubmit,
  setTimeOutput,
  id,
  defaultVal,
}) {
  const [time, setTime] = useState({
    hours: defaultVal.hours,
    mins: defaultVal.mins,
    total: 0,
  });

  function formatTime(field) {
    return (newFieldVal) => {
      //calc total time in mins
      let total;
      if (field === 'hours') {
        total = Number(newFieldVal * 60) + Number(time.mins);
      } else {
        total = Number(newFieldVal) + Number(time.hours * 60);
      }
      //pass time data in component
      setTime((oldVal) => {
        return {
          ...oldVal,
          [field]: newFieldVal,
          total: total,
        };
      });
      //pass time data to parent
      setTimeOutput((oldVal) => ({ ...oldVal, [id]: total }));
      //validation for none time values
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
      <View style={styles.row}>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('hours')}
          maxLength={2}
          value={time.hours}
        />
        <Text>:</Text>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('mins')}
          maxLength={2}
          value={time.mins}
        />
      </View>
      {time.hours > 23 && <Text>Please enter a valid time</Text>}
      {time.mins > 59 && <Text>Please enter a valid time</Text>}
    </View>
  );
}
