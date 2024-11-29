import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';

import AppNavigator from '../AwesomeProject/src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  </Provider>
);

export default App;
