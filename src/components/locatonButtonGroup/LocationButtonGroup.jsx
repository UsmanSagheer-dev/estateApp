import React from 'react';
import { View ,StyleSheet} from 'react-native';
import { Girl } from '../../assets/images/index';
import ButtonLocation from '../buttonLocation/ButtonLocation';

const LocationButtonGroup = () => {
  const data = [
    {
        image:Girl, 
      title: 'Bali',
    },
    {
        image:Girl, 
        title: 'Jakarta',
      },
      {
        image:Girl, 
        title: 'Yogyakarta',
      },
  ];

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <ButtonLocation
          key={index} 
          image={item.image}
          title={item.title}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:10,
        left:24
    }
})
export default LocationButtonGroup;
