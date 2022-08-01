import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  AllChoresView,
  ChoreNowView,
  RoomView,
  ScheduleView,
  Splash,
  UserSettings,
} from './Pages/index';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ScheduleView" component={ScheduleView} />
        <Stack.Screen name="AllChoresView" component={AllChoresView} />
        <Stack.Screen name="ChoreNowView" component={ChoreNowView} />
        <Stack.Screen name="RoomView" component={RoomView} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
