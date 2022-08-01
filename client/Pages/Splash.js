import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/SplashStyles';
import React from 'react';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>ChoreNow</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScheduleView')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
