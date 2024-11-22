import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {LocationIcon, Dropdown} from '../../assets/images';

const LocationButton = () => {
  return (
    <View style={styles.container}>
      <Image source={LocationIcon} style={{width: 15, height: 15}} />
      <Text style={styles.heading}>Jakarta, Indonesia</Text>
      <Image source={Dropdown} style={{width: 15, height: 15}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  heading: {
    fontSize: 10,
    color: 'black',
  },
});

export default LocationButton;
