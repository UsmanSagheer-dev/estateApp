import {View,  StyleSheet} from 'react-native';
import React from 'react';
import {Billsvg} from '../../assets/svg';

const BillIcon = () => {
  return (
    <View style={styles.container}>
      <Billsvg width={30} height={30} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 50,
    borderColor:'#8BC83F',
    borderWidth:1.2
  },
});

export default BillIcon;
