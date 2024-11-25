import {View, StyleSheet} from 'react-native';
import React from 'react';
import HeaderApp from '../header/HeaderApp';
import Jonathan from '../jonathanname/Jonathan';
import SearchInput from '../searchInput/SearchInput';


const ExploringSection = () => {
  return (
    <View style={styles.main}>
      <View>
        <HeaderApp />
      </View>

      <View style={styles.Jon}>
        <Jonathan />
      </View>
      <View style={styles.input}>
        <SearchInput />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  Jon: {
    top: 35,
  },
  input: {
    marginTop: 40,
  },
});

export default ExploringSection;
