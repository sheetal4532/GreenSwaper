import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import OTP from './src/Screens/OTP';
import SellerBusinessOption from './src/Screens/SellerBusinessOption';
import Home from './src/Screens/Home';
import Business from './src/Screens/Business';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
      <Stack.Navigator
         // initialRouteName="Splash"
         initialRouteName="Splash" //Splash Screen 
         screenOptions={{
            headerShown: false,
         }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="SellerBusinessOption" component={SellerBusinessOption} />
          <Stack.Screen name="Business" component={Business} />
          <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App;