import {View, StyleSheet, ImageBackground} from 'react-native';
import React from 'react';
import ExploringSection from '../../components/exploringSection/ExploringSection';
import {Background} from '../../assets/images';

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
      
    </View>
  );
};
const styles = StyleSheet.create({
  sec: {
    height: 400,
    backgroundColor: 'transparents',
  },
  imagebackground: {
    position: 'absolute',
    left: -100,
    top: -30,
    width: '100%',

    transform: [
      { rotate: '5deg' }
    ]
  },
  container: {
    flex: 1,
  },
  explore: {flex: 1, width: '100%', left: 100, top: 30,
    transform: [
      { rotate: '-5deg' }
    ]

  },
});
export default HomeScreen;
