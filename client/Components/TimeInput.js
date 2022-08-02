import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles/TimeInputStyles';
import React, { useState } from 'react';
import { globalElements } from '../Utils/GlobalStylingElements';

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
      <View style={globalElements.timeInputWrapper}>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('hours')}
          maxLength={2}
          value={time.hours}
          style={globalElements.inputText}
        />
        <Text style={globalElements.inputText}>:</Text>
        <TextInput
          placeholder="00"
          keyboardType="numeric"
          onChangeText={formatTime('mins')}
          maxLength={2}
          value={time.mins}
          style={globalElements.inputText}
        />
      </View>
      {time.hours > 23 && (
        <Text style={[globalElements.pGreyed, { textAlign: 'center' }]}>
          Hours input not valid
        </Text>
      )}
      {time.mins > 59 && (
        <Text style={[globalElements.pGreyed, { textAlign: 'center' }]}>
          Mins input not valid
        </Text>
      )}
    </View>
  );
}
