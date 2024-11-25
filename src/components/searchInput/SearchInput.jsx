import { View,TextInput,StyleSheet} from 'react-native'
import React from 'react'
import { Micro, SearchIcon } from '../../assets/svg';

 function SearchInput() {
  return (
    <View>
     <View style={styles.container}>
      <SearchIcon size={24} color="#4A4A4A" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search House, Apartment, etc"
        placeholderTextColor="#A6A6A6"
      />
      <View style={styles.divider} />
      <Micro name="mic" size={24} color="#A6A6A6" style={styles.icon} />
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginHorizontal: 30,
      marginVertical:30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
     
    },
    input: {
      flex: 1,
      fontSize: 16,
      color: '#4A4A4A',
      marginHorizontal: 10,
    },
    icon: {
      marginHorizontal: 5,
    },
    divider: {
      width: 1,
      height: '70%',
      backgroundColor: '#E0E0E0',
    },
  });

export default SearchInput