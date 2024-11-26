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
          <FeatureHeader />
        </View>
        <View style={styles.apart}>
          <FeatureCard />
        </View>
        {/* <View>
          <Text>
            asdfasd
          </Text>
        </View>
        <View>
          <Text>
            asdfasd
          </Text>
        </View>
        <View>
          <Text>
            asdfasd
          </Text>
        </View>
        <View>
          <Text>
            asdfasd
          </Text>
        </View> */}
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
    height: '100%',
    marginBottom:15
  },
});

export default HomeScreen;
