import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DividerContainer = () => {
  return (
    <View style={styles.dividerContainer}>
      <View
        style={[
          styles.dividerLine,
          {borderBottomWidth: 1, borderBottomColor: '#ECEDF3'},
        ]}
      />
      <Text style={styles.dividerText}>or</Text>
    </View>
  );
};
const styles = StyleSheet.create({
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

  },
});
export default DividerContainer;
