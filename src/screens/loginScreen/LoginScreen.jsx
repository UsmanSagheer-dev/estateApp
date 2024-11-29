import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useAuth} from '../../context/AuthContext';
import {Loginpic} from '../../assets/images';
import LoginImage from '../../components/loginimage/LoginImage';
import LoginButton from '../../components/loginButtons/LoginButton';
import ButtonContainer from '../../components/buttonContainer/ButtonContainer';
import DividerContainer from '../../components/dividerContainer/DividerContainer';
import TextAccount from '../../components/textAccount/TextAccount';
const LoginScreen = ({navigation}) => {
  const {login} = useAuth();
  const data = [
    {image: Loginpic},
    {image: Loginpic},
    {image: Loginpic},
    {image: Loginpic},
  ];
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <View style={styles.imageRow}>
          <LoginImage image={data[0].image} />
          <LoginImage image={data[1].image} />
        </View>
        <View style={styles.imageRow1}>
          <LoginImage image={data[2].image} />
          <LoginImage image={data[3].image} />
        </View>
      </View>

      <Text style={styles.text}>
        Ready to <Text style={styles.text1}>explore?</Text>
      </Text>

      <View style={styles.buttoncontainer}>
        <LoginButton
          title="Continue with Email"
          onPress={() => navigation.navigate('LoginForm')}
        />
      </View>
      <View style={styles.dividerContainer}>
        <DividerContainer />
      </View>
      <View style={styles.buttonContainer1}>
        <ButtonContainer onPress={() => navigation.navigate('LoginForm')} />
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
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    gap: 8,
  },
  imageRow: {
    gap: 8,
  },
  imageRow1: {
    gap: 8,
  },
  text: {
    fontSize: 25,
    fontWeight: 500,
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
    top: 30,
    marginLeft: 24,
  },
  text1: {
    fontSize: 25,
    fontWeight: 800,
    fontFamily: 'Lato-Regular',
    color: '#252B5C',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    top: 60,
  },
  dividerContainer: {
    top: 90,
  },

  buttonContainer1: {
    marginTop: 130,
  },
  textAccountContainer: {
    marginTop: 35,
  },
});

export default LoginScreen;
