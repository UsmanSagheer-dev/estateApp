import React from 'react';

import AppNavigator from '../AwesomeProject/src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => (
  <AuthProvider>
     <AppNavigator />
  </AuthProvider>

 
);

export default App;