import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import RegisterScreen from '../screens/registration/RegisterScreen';
import LoginFormScreen from '../screens/loginform/LoginFormScreen';
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="LoginForm" component={LoginFormScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;