import React from 'react';
import { Image } from 'react-native';
import { Images } from '../../../assets/images/images'; // Assuming you have an `Images` object

const TabBarIcon = ({ route, focused }) => {
  // Define a mapping for the icons
  const iconMap = {
    Home: focused ? Images.HOME_ICON : Images.Images.HOME_ICON ,
    Profile: focused ? Images.Images.HOME_ICON  : Images.Images.HOME_ICON ,
    Settings: focused ? Images.Images.HOME_ICON  : Images.Images.HOME_ICON ,
    Notifications: focused ? Images.Images.HOME_ICON  : Images.Images.HOME_ICON ,
    default: Images.defaultIcon,
  };

  const iconSource = iconMap[route] || iconMap.default; // Fallback to default icon if route not found

  return (
    <Image
      source={iconSource}
      style={{ width: 24, height: 24, resizeMode: 'contain' }}
    />
  );
};

export default TabBarIcon;
