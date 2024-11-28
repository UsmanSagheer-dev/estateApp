import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const LoginButton = ({ onPress, title, image}) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}>
      {image && <Image source={image} style={styles.icon} />}
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 17,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    backgroundColor:'#8BC83F',
    width:278,
    height:63
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Lato-Regular',
    color:'#FFFFFF'
  },
  icon: {
    width: 20,
    height: 20,
  }
});

export default LoginButton;

