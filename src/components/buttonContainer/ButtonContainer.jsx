import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../custombutton/CustomButton';

import {Google, Facebook} from '../../assets/images/index';

const ButtonContainer = () => {
  const handleGoogleLogin = () => {
    console.log('Google login pressed');
  };

  const handleFacebookLogin = ({}) => {
    console.log('Facebook login pressed');
  };

  return (
    <View style={styles.buttoncontainer1}>
      <CustomButton
        image={Google}
        onPress={handleGoogleLogin}
        color={'#F5F4F8'}
        customwidth={'42%'}
        borderradius={25}
      />
      <CustomButton
        image={Facebook}
        onPress={handleFacebookLogin}
        color={'#F5F4F8'}
        customwidth={'42%'}
        borderradius={25}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  
  },
});

export default ButtonContainer;
