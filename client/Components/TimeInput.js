import { View, Text, TextInput } from 'react-native';
import { styles } from './Styles/TimeInputStyles';
import { useState } from 'react';

export default function TimeInput({
  setDisableSubmit,
  setTimeOutput,
  id,
  placeholderVal,
}) {
  const [time, setTime] = useState({ hours: 0, mins: 0, total: 0 });
  const [valEntered, setValEntered] = useState(false);

  function formatTime(field) {
    return (newFieldVal) => {
      //placeholder logic to prevent user confusion if they start entering values into form
      if (newFieldVal) {
        setValEntered(true);
      } else {
        setValEntered(false);
      }
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
          placeholder={valEntered ? '00' : placeholderVal.hours}
          keyboardType="numeric"
          onChangeText={formatTime('hours')}
          maxLength={2}
        />
        <Text>:</Text>
        <TextInput
          placeholder={valEntered ? '00' : placeholderVal.mins}
          keyboardType="numeric"
          onChangeText={formatTime('mins')}
          maxLength={2}
        />
      </View>
      {time.hours > 23 && <Text>Please enter a valid time</Text>}
      {time.mins > 59 && <Text>Please enter a valid time</Text>}
    </View>
  );
}
