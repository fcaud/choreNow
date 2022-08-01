import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styles } from './Styles/SplashStyles';
import React from 'react';
import Logo from '../assets/logoWithText';
import LottieView from 'lottie-react-native';
import { globalElements } from '../Utils/GlobalStylingElements';
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';

export default function Splash({ navigation }) {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
  });

  return (
    <View style={styles.container}>
      <Logo width={200} height={30} />
      {fontsLoaded ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('ScheduleView')}
          style={[globalElements.button, styles.loginButton]}
        >
          <Text style={globalElements.buttonP}>Login</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator />
      )}
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
