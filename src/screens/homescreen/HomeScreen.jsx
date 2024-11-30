import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Text,
} from 'react-native';
import React from 'react';
import ExploringSection from '../../components/exploringSection/ExploringSection';
import {Background} from '../../assets/images';
import Catogries from '../../components/catogries/Catogries';
import SaleGroupCard from '../../components/salegroupCard/SaleGroupCard';
import FeatureHeader from '../../components/featureHeader/FeatureHeader';
import FeatureCard from '../../components/featureCard_group/FeatureCard';
import LocationHeader from '../../components/locationHeader/LocationHeader';
import LocationButtonGroup from '../../components/locatonButtonGroup/LocationButtonGroup';

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
        <View style={styles.feature}>
          <FeatureHeader title1="Featured Estates" title2="View all" />
        </View>
        <View style={styles.apart}>
          <FeatureCard />
        </View>
        <View style={styles.location}>
          <FeatureHeader title1="Top Locations" title2="explore" />
        </View>
        <View style={styles.locationset}>
          <LocationButtonGroup/>
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

  },
  sec: {
    height: 300,
  },
  imagebackground: {
    position: 'absolute',
    left: -130,
    top: -40,
    width: '100%',
    transform: [{rotate: '5deg'}],
  },
  explore: {
    flex: 1,
    width: '100%',
    left: 130,
    top: 40,
    transform: [{rotate: '-5deg'}],
  },
  catogre: {
    backgroundColor: 'white',
  },
  hallo: {
    backgroundColor: 'white',
    top: 10,
  },
  feature: {
    top: 15,
  },
  apart: {
    top: 40,
    height: 180,
  },
  location: {
    height: 80,
    top: 35,
    marginBottom: 20,
  },
  locationset: {
    top: 25,
    marginBottom: 50,
  }
});

export default HomeScreen;
