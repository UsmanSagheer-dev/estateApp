import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen/HomeScreen';
import Notification from '../screens/notification/Notification';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import { Search } from '../assets/svg';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen    options={{
            title: 'My profile',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Search/>
              );
            },
          }} name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs 