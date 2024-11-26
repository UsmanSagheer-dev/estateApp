import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Heart} from '../../assets/images';
const ApartmentCard = ({image,labelheading,titlemain,subtitle,rating,locationTitle,priceSet,month}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <TouchableOpacity style={styles.heartIcon}>
          <Image source={Heart} style={styles.setHeart} />
        </TouchableOpacity>
        <View style={styles.label}>
          <Text style={styles.labelText}>{labelheading}</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{titlemain}</Text>
        <Text style={styles.title}> {subtitle}</Text>
        <View style={styles.add}>
          <View style={styles.ratingRow}>
            <Image source={Heart} style={styles.setHeart} />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
          <Text style={styles.location}>{locationTitle}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.price}>${priceSet}</Text>
          <Text style={styles.pricemonth}>{month}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 268,
    height: 156,
    backgroundColor: '#F5F5FA',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
   left:24,
    flexDirection: 'row',
  },
  imageContainer: {
    padding: 8,
  },
  add: {
    marginTop:2
  },
  setHeart:{
    width:11,
    height:11
  },
  image: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  heartIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#8BC83F',
    borderRadius: 20,
    padding: 5,
   
  },
  label: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: '#234F68',
  },
  labelText: {
    color: 'white',
    fontSize: 8,
    fontWeight: 500,
    fontFamily: 'Raleway-Regular',
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 12,
    fontWeight: 700,
    color: '#252B5C',
    marginBottom: 5,
    fontFamily: 'Raleway-Regular',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#555',
  },
  location: {
    fontSize: 8,
    color: '#888',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 600,
    color: '#252B5C',
  },
  pricemonth: {
    fontSize: 8,
    fontWeight: 500,
    color: '#252B5C',
    top: 1.5,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default ApartmentCard;
