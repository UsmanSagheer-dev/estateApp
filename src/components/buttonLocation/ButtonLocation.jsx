import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const ButtonLocation = ({image, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Image source={image} style={styles.image} />
        <Text style={styles.heading}>{title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',

    width: '28%',
    height: 56,

    borderRadius: 50,
    backgroundColor: '#F5F4F8',
    paddingHorizontal: 16,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  heading: {
    fontSize: 10,
    fontFamily: 'Raleway-Regular',
    color:'#252B5C'
  },
});
export default ButtonLocation;
