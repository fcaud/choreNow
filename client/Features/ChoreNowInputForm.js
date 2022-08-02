import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/ChoreNowInputFormStyles';
import { globalElements } from '../Utils/GlobalStylingElements';
import { TimeInput } from '../Components/index';
import Logo from '../assets/logoWithText';

export default function ChoreNowInputForm({ selectChores, setTimeOutput }) {
  const [disableSubmit, setDisableSubmit] = useState(true);

  return (
    <View>
      <Text style={[globalElements.h2, { textAlign: 'center' }]}>
        How long do you want to spend?
      </Text>
      <TimeInput
        setDisableSubmit={setDisableSubmit}
        setTimeOutput={setTimeOutput}
        id={1}
        defaultVal={{ mins: null, hours: null }}
      />
      <View>
        <TouchableOpacity
          disabled={disableSubmit}
          onPress={selectChores}
          style={globalElements.buttonOrange}
        >
          <Logo width={100} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
