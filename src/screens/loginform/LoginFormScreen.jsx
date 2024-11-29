import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import {loginformimage, EmailIcon, LockIcon} from '../../assets/images/index';
import InputField from '../../components/inputs/Inputs';
import DividerContainer from '../../components/dividerContainer/DividerContainer';
import LoginButton from '../../components/loginButtons/LoginButton';
import ButtonContainer from '../../components/buttonContainer/ButtonContainer';
import TextAccount from '../../components/textAccount/TextAccount';
import {useNavigation} from '@react-navigation/native';

const LoginFormScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [emailTextAlign, setEmailTextAlign] = useState('left');
  const [passwordTextAlign, setPasswordTextAlign] = useState('left');

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
          Quis nostrud exercitation ullamco laboris nisi ut
        </Text>
      </View>
      <View style={styles.inputcontainer}>
        <View style={styles.groupContainer}>
          <InputField
            placeholder="Email"
            icon={EmailIcon}
            secureTextEntry={false}
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Password"
            icon={LockIcon}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.showPasswordText}>Show Password</Text>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>
      </View>
      <View style={styles.loginButtonContainer}>
        <LoginButton
          title="Login"
          onPress={() => console.log('Login clicked')}
        />
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
    marginTop: 20,
  },
  inputcontainer: {
    marginHorizontal: 24,
    marginTop: 34,
  },
  loginButtonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerContainer: {
    marginTop: 41,
  },
  buttonContainer1: {
    marginTop: 70,
  },
  textAccountContainer: {
    marginTop: 35,
  },
  groupContainer: {
    marginTop: 34,
    gap: 15,
  },
  bottomContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  showPasswordText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#1F4C6B',
  },
  forgotText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#1F4C6B',
  },
});

export default LoginFormScreen;
