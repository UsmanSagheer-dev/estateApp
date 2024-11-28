  import React from 'react';
  import {View, StyleSheet, Text} from 'react-native';
  import {useAuth} from '../../context/AuthContext';
  import {Loginpic, Google, Facebook} from '../../assets/images';
  import LoginImage from '../../components/loginimage/LoginImage';
  import LoginButton from '../../components/loginButtons/LoginButton';
  import CustomButton from '../../components/custombutton/CustomButton';
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
          <LoginButton title="Continue with Email" onPress={login} />
          {/* <LoginButton
            title="Go to Register"
            onPress={() => navigation.navigate('Register')}
          /> */}
        </View>
        <View style={styles.dividerContainer}>
          <View
            style={[
              styles.dividerLine,
              {borderBottomWidth: 1, borderBottomColor: '#ECEDF3'},
            ]}
          />
          <Text style={styles.dividerText}>or</Text>
        </View>
        <View style={styles.buttoncontainer1}>
          <CustomButton image={Google} onPress={login} color={'#F5F4F8'} customwidth={'42%'} borderradius={25} />
          <CustomButton image={Facebook} onPress={login} color={'#F5F4F8'} customwidth={'42%'} borderradius={25} />
        </View>
        <Text style={styles.textaccount}>
        Don’t have an account?
        
        <Text style={styles.text2} onPress={() => navigation.navigate('Register')}> Register</Text>
        </Text>
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
      top: 53,
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
      top: 100,
    },
    dividerText: {
      textAlign: 'center',
      top: -13,
      position: 'absolute',
      left: '45%',
      color: '#A1A5C1',
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 50,
      fontSize: 14,
    },
    dividerContainer: {
      justifyContent: 'center',
      width: '85%',
      left: 28,
      top: 170,
    },
    buttoncontainer1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 10,
      top: 210,
    },
    textaccount: {
      fontSize: 12,
      fontWeight: 400,
      fontFamily: 'Lato-Regular',
      color: '#252B5C',
      justifyContent:'center',
      top:280,
      marginLeft:120
    },
    text2: {
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'Lato-Regular',
      color: '#53587A',
    },
  });

  export default LoginScreen;
