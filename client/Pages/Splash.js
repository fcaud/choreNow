import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/SplashStyles';
import React from 'react';
import Logo from '../assets/logoWithText';
import LottieView from 'lottie-react-native';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/waves.json')}
        autoPlay
        loop
        speed={0.4}
        style={styles.animation}
      />
      <Logo width={200} height={30} />
      <TouchableOpacity onPress={() => navigation.navigate('ScheduleView')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
