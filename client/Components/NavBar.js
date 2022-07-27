import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { styles } from './Styles/NavBarStyles';
// import SvgComponent from '../assets/logo';

export default function NavBar() {
  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.touchable}>
        <Feather name="calendar" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Feather name="clipboard" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        {/* <Image source={require('../assets/')}></Image> */}
        {/* <SvgComponent /> */}
        <Octicons name="stopwatch" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Feather name="layout" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Octicons name="gear" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
