import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home'
import {Outsiders} from './src/pages/Outsiders'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator()

  return (
      <NavigationContainer >
        <StatusBar style='auto' />
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="register">
          <Drawer.Screen name="register" component={Home} />
          <Drawer.Screen name="outsiders" component={Outsiders} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}



