import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/pages/Home'
import {Logout} from './src/pages/Logout'
import { Outsiders } from './src/pages/Outsiders'
import { Account } from './src/components/Account'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { CustomImageIcon } from './src/components/CustomImageIcon'


export default function App() {

  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer >
      <StatusBar style='auto' />
      <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Drawer.Screen
          name="home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <CustomImageIcon />
            )

          }} />

        <Drawer.Screen
          name="outsiders"
          component={Outsiders}
          options={{
            drawerIcon: ({ color, size }) => (

              <MaterialCommunityIcons name="account-group" size={27} color="black" />
            )
          }} />

        <Drawer.Screen
          name="account"
          component={Account}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" size={27} color="black" />
            )
          }} />


        <Drawer.Screen
          name="logout"
          component={Logout}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialIcons name="logout" size={27} color="black" />
            )
          }} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}
