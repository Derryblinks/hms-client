


// import React, { useState, useRef } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';

// const { width, height } = Dimensions.get('window');

// const data = [
//   {
//     id: '1',
//     title: 'Find your perfect stay with ease.',
//     subtitle: 'Explore, book, and enjoy unforgettable experiences.',
//     image: require('../assets/images/image1.png'), // Update with the first image path
//   },
//   {
//     id: '2',
//     title: 'Explore Hotels Anywhere',
//     subtitle: 'Search from a wide range of hotels to find the perfect stay that fits your style and budget.',
//     image: require('../assets/images/image2.png'), // Update with the second image path
//   },
// ];

// const Onboarding = ({ navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef(null);

//   const onViewableItemsChanged = useRef(({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index);
//     }
//   }).current;

//   const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

//   const handleNext = () => {
//     if (currentIndex < data.length - 1) {
//       flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
//     } else {
//       navigation.navigate('Home'); // Navigate to the home screen
//     }
//   };

//   const handleSkip = () => {
//     navigation.navigate('Home');
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         ref={flatListRef}
//         onViewableItemsChanged={onViewableItemsChanged}
//         viewabilityConfig={viewConfig}
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             <Image source={item.image} style={styles.image} resizeMode="cover" />
//             <View style={styles.content}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.subtitle}>{item.subtitle}</Text>
//             </View>
//           </View>
//         )}
//       />

//       {/* Pagination Dots */}
//       <View style={styles.pagination}>
//         {data.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               currentIndex === index && styles.activeDot,
//             ]}
//           />
//         ))}
//       </View>

//       {/* Buttons */}
//       <View style={styles.buttons}>
//         <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//           <Text style={styles.nextText}>{currentIndex === data.length - 1 ? '✓' : '→'}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   slide: {
//     width,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '50%', // Adjust to your layout preferences
//   },
//   content: {
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingVertical: 40,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 10,
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
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
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   skipButton: {
//     backgroundColor: '#000',
//     borderRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   skipText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   nextButton: {
//     backgroundColor: '#000',
//     borderRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   nextText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default Onboarding;
