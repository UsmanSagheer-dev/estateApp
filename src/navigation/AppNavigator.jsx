import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '../navigation/AuthNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { useAuth } from '../context/AuthContext';

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomTabNavigator />  : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;

