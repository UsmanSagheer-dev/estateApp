import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../store/authSlice/authSlice';
import { EmailIcon, LockIcon, BackArrow } from '../../assets/images/index';
import InputField from '../../components/inputs/Inputs';
import LoginButton from '../../components/loginButtons/LoginButton';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async () => {
    if (!name || !email || !password) {
      console.log('All fields are required.');
      return;
    }
    if (!validateEmail(email)) {
      console.log('Invalid email format.');
      return;
    }
    try {
      await dispatch(signup({ email, password, name }));
      console.log('User registered successfully');
    } catch (err) {
      console.error('Registration failed:', err.message);
      if (err.message.includes('email-already-in-use')) {
        setShowError(true);
      }
    }
  };

  if (isAuthenticated) {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('LoginForm')}
      >
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
      {error && <Text style={{ color: 'red', marginLeft: 24 }}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <LoginButton title="Register" onPress={handleRegister} />
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
