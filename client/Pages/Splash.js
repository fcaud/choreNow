import { Text, TouchableOpacity } from 'react-native';

export default function Splash({ navigation }) {
  return (
    <>
      <Text>Splash</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScheduleView')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </>
  );
}
