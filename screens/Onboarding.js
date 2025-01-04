


// import React from 'react';
// import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';

// const OnboardingScreen = () => {
//   const fadeAnim = new Animated.Value(0); // Initial opacity

//   const startAnimation = () => {
//     Animated.timing(fadeAnim, {
//       toValue: 1,
//       duration: 500,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Animated.View style={{ ...styles.imageContainer, opacity: fadeAnim }}>
//         <Image
//           source={require('../assets/images/background.png')} // Placeholder image
//           style={styles.image}
//         />
//       </Animated.View>
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>Find your perfect stay with ease.</Text>
//         <Text style={styles.subtitle}>Explore, book, and enjoy unforgettable experiences.</Text>
//         <View style={styles.indicatorContainer}>
//           <View style={styles.indicator} />
//           <View style={styles.indicator} />
//           <View style={styles.indicator} />
//         </View>
//         <TouchableOpacity style={styles.skipButton} onPress={startAnimation}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     paddingTop: 40, 
//   },
//   imageContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     borderRadius: 10,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   indicatorContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   indicator: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#ccc',
//     margin: 5,
//   },
//   skipButton: {
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
//   skipText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default OnboardingScreen;


import React from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GestureRecognizer from 'react-native-swipe-gestures'; // Import swipe gesture library

const OnboardingScreen = ({ navigation }) => {
  // Function to handle swiping gestures
  const handleSwipeLeft = () => {
    navigation.navigate('Onboarding2'); // Navigate to the next onboarding screen
  };

  return (
    <GestureRecognizer
      style={{ flex: 1 }}
      onSwipeLeft={handleSwipeLeft} // Trigger on swipe left
    >
      <SafeAreaView style={styles.container}>
        {/* Background Image */}
        <Image
          source={require('../assets/images/image1.png')} // Adjust the path to your file
          style={styles.image}
          resizeMode="cover"
        />

        {/* Onboarding Content */}
        <View style={styles.content}>
          <Text style={styles.title}>Find your perfect stay with ease.</Text>
          <Text style={styles.subtitle}>
            Explore, book, and enjoy unforgettable experiences.
          </Text>

          {/* Pagination Dots */}
          <View style={styles.pagination}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>

          {/* Navigation Buttons */}
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => navigation.navigate('Onboarding2')}
            >
              <Text style={styles.nextText}>→</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </GestureRecognizer>
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

export default OnboardingScreen;
