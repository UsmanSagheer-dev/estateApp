import {View, TextInput, StyleSheet, Image, Text} from 'react-native';
import React, {useState} from 'react';
import {EmailIcon, LockIcon} from '../../assets/images/index';
const Inputs = () => {
  const [emailTextAlign, setEmailTextAlign] = useState('left');
  const [passwordTextAlign, setPasswordTextAlign] = useState('left');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image source={EmailIcon} style={styles.icon} />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#252B5C"
          style={[styles.input, {textAlign: emailTextAlign}]}
          onFocus={() => setEmailTextAlign('right')}
          onBlur={() => setEmailTextAlign('left')}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image source={LockIcon} style={styles.icon} />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#252B5C"
          secureTextEntry={true}
          style={[styles.input, {textAlign: passwordTextAlign}]}
          onFocus={() => setPasswordTextAlign('right')}
          onBlur={() => setPasswordTextAlign('left')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.showPasswordContainer}>
          <Text style={styles.showPasswordText}>Show Password</Text>
        </View>
        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
 
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 16,
    marginTop: 30,
   
  },
  input: {
    flex: 1,
    height: 70,
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default Inputs;
