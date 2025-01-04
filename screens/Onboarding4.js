import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const OnboardingScreen4 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/image4.png')} // Adjust the path to your file
        style={styles.image}
        resizeMode="cover"
      />

      {/* Onboarding Content */}
      <View style={styles.content}>
        <Text style={styles.title}>We're Here For You</Text>
        <Text style={styles.subtitle}>
        Save your preferences, access exclusive deals, and manage your bookings effortlessly.
        </Text>

        {/* Pagination Dots */}
        {/* <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View> */}

        {/* Navigation Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.skipText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Onboarding4')}>
            <Text style={styles.nextText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '50%', // Adjust based on layout preference
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    // fontFamily: 'poppins',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: -200,
  },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#000',
//   },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  skipButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OnboardingScreen4;
