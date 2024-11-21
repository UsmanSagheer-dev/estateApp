import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './src/navigation/BottomTabNavigator';
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
