import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Jonathan() {
  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        Hey, <Text style={styles.nameText}>Jonathan</Text>!
      </Text>

      <Text style={styles.subtitleText}>Let's start exploring</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  greetingText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#252b5c',
    fontFamily: 'Lato-Regular',
  },
  nameText: {
    fontSize: 26,
    color: '#1f567d',
    fontWeight: '800',
    fontFamily: 'Lato-Regular',
  },
  subtitleText: {
    fontSize: 26,
    color: '#222222',
    marginTop: 5,
    
    fontFamily: 'Lato-Regular',
  },
});
