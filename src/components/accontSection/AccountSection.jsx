import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const AccountSection = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log('🚀 ~ currentUser:', currentUser); // Debug currentUser value
  
  const firstCharacter = currentUser?.displayName?.charAt(0).toUpperCase() || 'L';
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{firstCharacter}</Text>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default AccountSection;
