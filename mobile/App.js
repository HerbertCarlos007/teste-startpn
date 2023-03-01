import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Drawer = createDrawerNavigator()

  return (
      <NavigationContainer >
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="register">
          <Drawer.Screen name="register" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}



