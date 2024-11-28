import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {loginformimage} from '../../assets/images';
import Inputs from '../../components/inputs/Inputs';
const LoginFormScreen = () => {
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
        <Inputs/>
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
});

export default LoginFormScreen;
