import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {loginformimage} from '../../assets/images';
import Inputs from '../../components/inputs/Inputs';
import DividerContainer from '../../components/dividerContainer/DividerContainer';
import LoginButton from '../../components/loginButtons/LoginButton';
import ButtonContainer from '../../components/buttonContainer/ButtonContainer';
import TextAccount from '../../components/textAccount/TextAccount';
import { useNavigation } from '@react-navigation/native';
const LoginFormScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={loginformimage} style={styles.image} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>
          Let's <Text style={styles.text1}>Sign In</Text>
        </Text>
        <Text style={styles.text2}>
          quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <Inputs />
      </View>
      <View style={styles.loginButtonContainer}>
        <LoginButton title="Login" />
      </View>
      <View style={styles.dividerContainer}>
        <DividerContainer />
      </View>
      <View style={styles.buttonContainer1}>
        <ButtonContainer />
      </View>
      <View style={styles.textAccountContainer}>
        <TextAccount onpress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imagecontainer: {
    width: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
  },
  textcontainer: {
    marginTop: 9,
    justifyContent: 'flex-start',
    marginLeft: 24,
  },
  text1: {
    fontSize: 25,
    fontWeight: '700',
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
  },
  text2: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#252B5C',
    top: 20,
  },
  inputcontainer: {
    marginTop: 34,
  },
  loginButtonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerContainer: {
top:41
  },
  buttonContainer1: {
    marginTop: 70,
  },
  textAccountContainer: {
    marginTop: 35,
  },
});

export default LoginFormScreen;
