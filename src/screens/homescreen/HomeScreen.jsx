import {View, StyleSheet, ImageBackground, Button} from 'react-native';
import React from 'react';
import ExploringSection from '../../components/exploringSection/ExploringSection';
import {Background} from '../../assets/images';
import Catogries from '../../components/catogries/Catogries';
import HalloweenCard from '../../components/hallolweenCard/HalloweenCard';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sec}>
        <ImageBackground source={Background} style={styles.imagebackground}>
          <View style={styles.explore}>
            <ExploringSection />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.catogre}>
        <Catogries />
      </View>
      <View style={styles.hallo}>
        <HalloweenCard />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  catogre: {
    backgroundColor: 'white',
  },
  sec: {
    height: 300,
  },
  imagebackground: {
    position: 'absolute',
    left: -100,
    top: -30,
    width: '100%',

    transform: [{rotate: '5deg'}],
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  explore: {
    flex: 1,
    width: '100%',
    left: 100,
    top: 30,
    transform: [{rotate: '-5deg'}],
  },
});
export default HomeScreen;
