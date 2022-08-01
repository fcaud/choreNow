import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles/SplashStyles';
import React from 'react';
import Logo from '../assets/logoWithText';
import LottieView from 'lottie-react-native';
import { globalElements } from '../Utils/GlobalStylingElements';

export default function Splash({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo width={200} height={30} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ScheduleView')}
        style={[globalElements.button, styles.loginButton]}
      >
        <Text style={globalElements.p}>Login</Text>
      </TouchableOpacity>
      <LottieView
        source={require('../assets/waves.json')}
        autoPlay
        loop
        speed={0.4}
        style={styles.animation}
      />
    </View>
  );
}
