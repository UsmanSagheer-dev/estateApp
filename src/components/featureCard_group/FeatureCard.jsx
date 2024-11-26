import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import ApartmentCard from '../apartmentCard/ApartmentCard'; // Correct path to the ApartmentCard component
import { Estateimg } from '../../assets/images/index'; // Ensure these images are correctly imported

const FeatureCard = () => {

  const data = [
    {
      id: '1',
      image: Estateimg, 
      labelheading: 'Apartment',
      titlemain: 'Sky Dandelions',
      subtitle: 'Apartment',
      rating: 4.9,
      locationTitle: 'Jakarta, Indonesia',
      priceSet: 290,
      month: '/month',
    },
    {
      id: '2',
      image: Estateimg, 
      labelheading: 'Apartment',
      titlemain: 'Ocean Breeze',
      subtitle: 'Apartment',
      rating: 4.7,
      locationTitle: 'Bali, Indonesia',
      priceSet: 320,
      month: '/month',
    },
    {
      id: '3',
      image: Estateimg,
      labelheading: 'Apartment',
      titlemain: 'City Lights',
      subtitle: 'Apartment',
      rating: 4.8,
      locationTitle: 'Jakarta, Indonesia',
      priceSet: 270,
      month: '/month',
    },
    {
      id: '4',
      image: Estateimg, 
      labelheading: 'Apartment',
      titlemain: 'Mountain View',
      subtitle: 'Apartment',
      rating: 4.6,
      locationTitle: 'Bandung, Indonesia',
      priceSet: 250,
      month: '/month',
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

    <View style={styles.container}>
      {data.map((item) => (
        <ApartmentCard
          key={item.id}
          image={item.image}
          labelheading={item.labelheading}
          titlemain={item.titlemain}
          subtitle={item.subtitle}
          rating={item.rating}
          locationTitle={item.locationTitle}
          priceSet={item.priceSet}
          month={item.month}
        />
      ))}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
flexDirection:'row',
   gap:14,
    top:20,
    marginBottom:10
  },
});

export default FeatureCard;
