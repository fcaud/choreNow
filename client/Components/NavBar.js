import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { styles } from './Styles/NavBarStyles';
import SvgComponent from '../assets/logo';
import React from 'react';

export default function NavBar({ navigation }) {
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ScheduleView')}
      >
        <Feather name="calendar" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('AllChoresView')}
      >
        <Feather name="clipboard" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ChoreNowView')}
      >
        <SvgComponent />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('RoomView')}
      >
        <Feather name="layout" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('UserSettings')}
      >
        <Octicons name="gear" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
