import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/image3.png')} // Replace with your own image
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Welcome to Hotel Explorer!</Text>
      <Text style={styles.subtitle}>
        Start booking amazing stays, discover new destinations, and enjoy the comfort you deserve.
      </Text>

      {/* Example: A button for further navigation */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
