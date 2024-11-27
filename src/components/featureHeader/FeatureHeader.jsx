import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const FeatureHeader = ({title1,title2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title1}</Text>
      <TouchableOpacity>
        <Text style={styles.subtitle}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    top: 26,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Lato-Regular',
    fontSize: 18,
    fontWeight: 700,
    color: '#252B5C',
  },
  subtitle: {
    fontFamily: 'Raleway-Regular',
    fontSize: 10,
    fontWeight: 600,
    color: '#252B5C',
  },
});
export default FeatureHeader;
