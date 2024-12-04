import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { signout } from '../../store/authSlice/authSlice'; // Import signout action

const AccountSection = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const { currentUser } = useSelector((state) => state.auth);
  console.log('🚀 ~ currentUser:', currentUser); // Debug currentUser value
  
  const firstCharacter = currentUser?.displayName?.charAt(0).toUpperCase() || 'L';

  const handleLogout = async () => {
    try {
      setModalVisible(false); // Close the modal
      await dispatch(signout()); // Dispatch the logout action
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Navigate to LoginScreen
      });
    } catch (error) {
      console.error('Logout failed:', error.message); // Debug logout errors
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>{firstCharacter}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable 
          style={styles.modalOverlay} 
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Account Options</Text>
            
            {currentUser ? (
              <TouchableOpacity 
                style={styles.modalButton} 
                onPress={handleLogout}
              >
                <Text style={styles.buttonText}>Sign Out</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity 
                style={styles.modalButton}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate('Login');
                }}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            )}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.2,
    borderColor: '#DFDFDF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AccountSection;
