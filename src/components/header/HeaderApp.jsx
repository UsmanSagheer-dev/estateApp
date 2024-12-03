import {View, StyleSheet} from 'react-native';
import React from 'react';
import LocationButton from '../locationButton/LocationButton';
import Bill from '../bilicon/BillIcon';
import AccountSection from '../accontSection/AccountSection';

const HeaderApp = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.location}>
        <LocationButton />
      </View>
      <View style={Styles.subcontainer}>
        <Bill />
        <AccountSection />
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',

    paddingHorizontal: 24,
    paddingTop: 15,
    flexDirection: 'row',
  },
  location: {flex: 1},
  subcontainer: {
    flexDirection: 'row',
    flex: 1,

    justifyContent: 'flex-end',
    gap: 10,
  },
});
export default HeaderApp;
