import {View, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import React from 'react';
import ExploringSection from '../../components/exploringSection/ExploringSection';
import {Background} from '../../assets/images';
import Catogries from '../../components/catogries/Catogries';
import SaleGroupCard from '../../components/salegroupCard/SaleGroupCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <SaleGroupCard />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
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
  explore: {
    flex: 1,
    width: '100%',
    left: 100,
    top: 30,
    transform: [{rotate: '-5deg'}],
  },
  catogre: {
    backgroundColor: 'white',
  },
  hallo: {
    backgroundColor: 'white',
    top: 10,
  },
});

export default HomeScreen;
