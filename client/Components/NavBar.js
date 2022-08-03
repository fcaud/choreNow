import { View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { styles } from './Styles/NavBarStyles';
import SvgComponent from '../assets/logo';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import GlobalStyling from '../Utils/GlobalStylingVariables';

export default function NavBar({ navigation }) {
  const route = useRoute();
  return (
    <View style={styles.view}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ScheduleView')}
      >
        <Feather
          name="calendar"
          style={[
            styles.icon,
            route.name === 'ScheduleView' && styles.orangeIcon,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('AllChoresView')}
      >
        <Feather
          name="clipboard"
          style={[
            styles.icon,
            route.name === 'AllChoresView' && styles.orangeIcon,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('ChoreNowView')}
      >
        <SvgComponent
          fill={
            route.name === 'ChoreNowView'
              ? GlobalStyling.textOrange
              : GlobalStyling.logoNavbar
          }
          width={31}
          height={25}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('RoomView')}
      >
        <Feather
          name="layout"
          style={[styles.icon, route.name === 'RoomView' && styles.orangeIcon]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('UserSettings')}
      >
        <Octicons
          name="gear"
          style={[
            styles.icon,
            route.name === 'UserSettings' && styles.orangeIcon,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}
