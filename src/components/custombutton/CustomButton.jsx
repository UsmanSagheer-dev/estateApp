import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = ({color, onPress, textColor, title}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 17.5,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 17,

    alignItems: 'center',

    borderRadius: 20,
  },
  buttonText: {
    fontSize: 10,
    fontWeight: 500,
    fontFamily:'Raleway-Regular',

  },
});

export default CustomButton;
