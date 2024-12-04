import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import RegisterScreen from '../screens/registration/RegisterScreen';
import LoginFormScreen from '../screens/loginform/LoginFormScreen';
import HomeScreen from '../screens/homescreen/HomeScreen';
import AccountSection from '../components/accontSection/AccountSection';
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="LoginForm" component={LoginFormScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Account" component={AccountSection} />

  </Stack.Navigator>
);

export default AuthNavigator;
