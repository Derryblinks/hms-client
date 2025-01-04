import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const OnboardingScreen3 = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/image3.png')} // Adjust the path to your file
        style={styles.image}
        resizeMode="cover"
      />

      {/* Onboarding Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Book in Just a Few Clicks</Text>
        <Text style={styles.subtitle}>
        Enjoy a seamless and secure booking process—quick, easy, and hassle-free.
        </Text>

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        {/* Navigation Buttons */}
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Onboarding4')}>
            <Text style={styles.nextText}>→</Text>
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
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: -80,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  skipButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  skipText: {
    color: '#fff',
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#000',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nextText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OnboardingScreen3;
