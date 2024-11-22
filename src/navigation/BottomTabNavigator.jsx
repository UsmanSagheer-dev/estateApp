import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen/HomeScreen';
import Notification from '../screens/notification/Notification';
import ProfileScreen from '../screens/profile/ProfileScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import {Homeicon, HeartIcon, SearchIcon, Profile} from '../assets/svg';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: '#fff',
        
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Homeicon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <SearchIcon width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <HeartIcon width={25} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({size, focused, color}) => (
            <Profile width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
