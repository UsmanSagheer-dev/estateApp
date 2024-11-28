import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

const LoginImage = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
   

  },
  image: {
    width: 171,
    height: 174,
  },
});

export default LoginImage;
