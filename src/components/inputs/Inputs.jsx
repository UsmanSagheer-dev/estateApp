import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, Text} from 'react-native';

const InputField = ({
  placeholder,
  icon,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  const [textAlign, setTextAlign] = useState('center');

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Image source={icon} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#252B5C"
          secureTextEntry={secureTextEntry}
          style={[styles.input]}
          onFocus={() => setTextAlign('left')}
          onBlur={() => setTextAlign('left')}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {/* <View style={styles.bottomContainer}>
        <Text style={styles.showPasswordText}>Show Password</Text>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },

  inputWrapper: {
   
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  input: {
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
    fontSize: 14,
    height: 70,
  },
 
});

export default InputField;
