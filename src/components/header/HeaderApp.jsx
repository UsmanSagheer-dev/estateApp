import {View, StyleSheet} from 'react-native';
import React from 'react';
import LocationButton from '../locationButton/LocationButton';


const HeaderApp = () => {
  return (
    <View style={Styles.container}>
      <LocationButton />

    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'red',
    paddingHorizontal: 24,
    paddingTop: 15,
  },
});
export default HeaderApp;
