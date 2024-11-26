import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../custombutton/CustomButton';

const Catogries = () => {
  const buttonData = [
    {id: 1, title: 'All', color: '#F5F4F8', textColor: '#252B5C'},
    {id: 2, title: 'House', color: '#F5F4F8', textColor: '#252B5C'},
    {id: 3, title: 'Apartment', color: '#F5F4F8', textColor: '#252B5C'},

    {id: 4, title: 'House', color: '#F5F4F8', textColor: '#252B5C'},
  ];

  const [activeButton, setActiveButton] = useState(null);

  const handlePress = title => {
    setActiveButton(title);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {buttonData.map(button => {
          const isActive = activeButton === button.id;
          return (
            <CustomButton
              key={button.id}
              title={button.title}
              color={isActive ? '#234F68' : button.color}
              textColor={isActive ? '#fff' : button.textColor}
              onPress={() => handlePress(button.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    left: 18,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 10,
  },
});

export default Catogries;
