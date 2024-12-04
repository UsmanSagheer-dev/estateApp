import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import LoginFormScreen from '../screens/loginform/LoginFormScreen';
import RegisterScreen from '../screens/registration/RegisterScreen';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* BottomTabNavigator always visible */}
      <Stack.Screen name="Main" component={BottomTabNavigator} />
      {/* Login screen for navigating from Account Section */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginForm" component={LoginFormScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
