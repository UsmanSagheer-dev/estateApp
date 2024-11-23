import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Account} from '../../assets/images';
const AccountSection = () => {
  return (
    <View style={styles.container}>
      <Image source={Account} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#DFDFDF',
  },
});

export default AccountSection;
