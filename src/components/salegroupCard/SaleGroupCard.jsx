import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HalloweenCard from '../hallolweenCard/HalloweenCard';
import {Halloimage} from '../../assets/images/index';

const SaleGroupCard = () => {
  const cardData = [
    {
      backImage: Halloimage,
      firstTitle: 'Halloween Sale',
      secondTitle: 'Sale!',
      discription: 'All discount up to 60%',
    },
    {
      backImage: Halloimage,
      firstTitle: 'Halloween Sale',
      secondTitle: 'Sale!',
      discription: 'All discount up to 60%',
    },
    {
      backImage: Halloimage,
      firstTitle: 'Halloween Sale',
      secondTitle: 'Sale!',
      discription: 'All discount up to 60%',
    },
    {
      backImage: Halloimage,
      firstTitle: 'Spooky Savings',
      secondTitle: 'End of Season Sale',
      discription: 'Get ready for a frightful bargain!',
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {cardData.map((item, index) => (
          <HalloweenCard
            key={index}
            backImage={item.backImage}
            firstTitle={item.firstTitle}
            secondTitle={item.secondTitle}
            discription={item.discription}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 13,
  },
});
export default SaleGroupCard;
