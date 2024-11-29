import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TextAccount = ({onpress}) => {
  return (
    <View>
      <Text style={styles.textaccount}>
        Don’t have an account?
        <Text
          style={styles.text2}
          onPress={onpress}>
          {' '}
          Register
        </Text>
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    textaccount: {
        fontSize: 12,
        fontWeight: 400,
        fontFamily: 'Lato-Regular',
        color: '#252B5C',
        justifyContent: 'center',
     
        marginLeft: 100,
      },
      text2: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: 'Lato-Regular',
        color: '#53587A',
      },
});
export default TextAccount;
