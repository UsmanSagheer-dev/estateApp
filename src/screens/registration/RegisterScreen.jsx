import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {EmailIcon, LockIcon} from '../../assets/images/index';
import InputField from '../../components/inputs/Inputs';
import {BackArrow} from '../../assets/images/index';
import LoginButton from '../../components/loginButtons/LoginButton';
const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('LoginForm')}>
        <Image source={BackArrow} style={styles.backIcon} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Create an <Text style={styles.titleBold}>account</Text>
        </Text>
        <Text style={styles.subtitle}>
          Please enter your details to create an account
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <InputField
          placeholder="Name"
          icon={EmailIcon}
          secureTextEntry={false}
          onChangeText={setName}
        />
        <InputField
          placeholder="Email"
          icon={EmailIcon}
          secureTextEntry={false}
          onChangeText={setEmail}
        />
        <InputField
          placeholder="Password"
          icon={LockIcon}
          secureTextEntry={true}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.showPasswordText}>Show Password</Text>
        <Text style={styles.forgotText}>Terms of service</Text>
      </View>
      <View style={styles.buttonContainer}>
        <LoginButton title="Register" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
  },
  backButton: {
    marginLeft: 24,
    marginTop: 24,
  },
  titleContainer: {
    marginLeft: 24,
    marginTop: 50,
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    fontWeight: '500',
    color: '#252B5C',
  },
  titleBold: {
    fontFamily: 'Lato-Regular',
    fontSize: 25,
    fontWeight: '800',
    color: '#252B5C',
  },
  subtitle: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#252B5C',
    marginTop: 20,
  },
  groupContainer: {
    marginHorizontal: 24,
    marginTop: 50,
    gap: 15,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    paddingHorizontal: 16,
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
  showPasswordText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#1F4C6B',
  },
  bottomContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 5,
  },
  showPasswordText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#234F68',
  },
  forgotText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    fontWeight: '600',
    color: '#234F68',
  },
  buttonContainer: {
    marginHorizontal: 24,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RegisterScreen;
