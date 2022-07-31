import { NavBar } from '../Components/index';
import { ChoreNowInputForm } from '../Features/index';
import { Text, View, ActivityIndicator } from 'react-native';
import { styles } from './Styles/ChoreNowViewStyles';
import { useState } from 'react';

export default function ChoreNowView({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  //Remember to put Activity indicator in
  return (
    <View style={styles.container}>
      <Text>ChoreNowView</Text>
      <ChoreNowInputForm />
      {isLoading ? <ActivityIndicator /> : <View></View>}
      <NavBar navigation={navigation} />
    </View>
  );
}
