import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const HalloweenCard = ({backImage, firstTitle, secondTitle, discription}) => {
  return (
    <ImageBackground
      source={backImage}
      style={styles.card}
      imageStyle={styles.imageStyle}>
      <View style={styles.textContainer}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>{firstTitle}</Text>
          <Text style={styles.saletitle}> {secondTitle}</Text>
          <Text style={styles.subtitle}>{discription}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 270,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    left: 24,
    marginTop: 20,
    justifyContent: 'space-between',

    borderBottomLeftRadius: 3,
  },
  imageStyle: {
    borderRadius: 20,
    width: '100%',
  },
  subcontainer: {
    top: 41,
    left: 22,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'Raleway-Regular',
  },
  saletitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'Raleway-Regular',
  },
  subtitle: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 400,
    marginTop: 5,
    fontFamily: 'Raleway-Regular',
  },
  button: {
    backgroundColor: '#1a4f87',
    position: 'absolute',
    top: 130,
    borderTopRightRadius: 25,
    width: 93,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HalloweenCard;
